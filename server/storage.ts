import {
  users,
  symptoms,
  appointments,
  type User,
  type UpsertUser,
  type Symptom,
  type InsertSymptom,
  type Appointment,
  type InsertAppointment,
  type UpdateAppointment,
} from "@shared/schema";
import { db } from "./db";
import { eq, desc, and } from "drizzle-orm";

export interface IStorage {
  // User operations (required for Replit Auth)
  getUser(id: string): Promise<User | undefined>;
  upsertUser(user: UpsertUser): Promise<User>;
  
  // Symptom operations
  getUserSymptoms(userId: string): Promise<Symptom[]>;
  addSymptom(symptom: InsertSymptom): Promise<Symptom>;
  
  // Appointment operations
  getUserAppointments(userId: string): Promise<Appointment[]>;
  addAppointment(appointment: InsertAppointment): Promise<Appointment>;
  updateAppointment(id: string, updates: UpdateAppointment): Promise<Appointment | undefined>;
  deleteAppointment(id: string, userId: string): Promise<boolean>;
}

export class DatabaseStorage implements IStorage {
  // User operations (required for Replit Auth)
  async getUser(id: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async upsertUser(userData: UpsertUser): Promise<User> {
    const userId = userData.id;
    
    if (userId) {
      // User exists, update by ID
      const [user] = await db
        .insert(users)
        .values({ ...userData, id: userId })
        .onConflictDoUpdate({
          target: users.id,
          set: {
            ...userData,
            updatedAt: new Date(),
          },
        })
        .returning();
      return user;
    } else {
      // New user, create with auto-generated ID
      const [user] = await db
        .insert(users)
        .values(userData)
        .returning();
      return user;
    }
  }

  // Symptom operations
  async getUserSymptoms(userId: string): Promise<Symptom[]> {
    return await db
      .select()
      .from(symptoms)
      .where(eq(symptoms.userId, userId))
      .orderBy(desc(symptoms.createdAt));
  }

  async addSymptom(symptom: InsertSymptom): Promise<Symptom> {
    const [newSymptom] = await db
      .insert(symptoms)
      .values(symptom)
      .returning();
    return newSymptom;
  }

  // Appointment operations
  async getUserAppointments(userId: string): Promise<Appointment[]> {
    return await db
      .select()
      .from(appointments)
      .where(eq(appointments.userId, userId))
      .orderBy(appointments.date, appointments.time);
  }

  async addAppointment(appointment: InsertAppointment): Promise<Appointment> {
    const [newAppointment] = await db
      .insert(appointments)
      .values(appointment)
      .returning();
    return newAppointment;
  }

  async updateAppointment(id: string, updates: UpdateAppointment): Promise<Appointment | undefined> {
    const [updatedAppointment] = await db
      .update(appointments)
      .set(updates)
      .where(eq(appointments.id, id))
      .returning();
    return updatedAppointment;
  }

  async deleteAppointment(id: string, userId: string): Promise<boolean> {
    const result = await db
      .delete(appointments)
      .where(and(eq(appointments.id, id), eq(appointments.userId, userId)))
      .returning();
    return result.length > 0;
  }
}

export const storage = new DatabaseStorage();
