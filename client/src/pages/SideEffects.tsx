import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function SideEffects() {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-destructive/20 to-destructive/10 text-foreground rounded-2xl p-8 border border-destructive/20">
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center">
            <i className="fas fa-exclamation-triangle text-2xl text-destructive"></i>
          </div>
          <div>
            <h1 className="text-3xl font-bold">Cancer Treatment Side Effect Manager</h1>
            <p className="text-muted-foreground">Practical advice and quick resources for cancer treatment side effects</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            This page helps patients and caregivers understand common side effects from cancer treatments 
            (chemotherapy, radiotherapy, immunotherapy, surgery and targeted therapies) and provides practical, 
            evidence-based tips you can share with your care team.
          </p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-foreground mb-4">Common Treatments</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3" data-testid="treatment-chemotherapy">
                  <span className="bg-chart-1/20 text-chart-1 px-3 py-1 rounded-full text-sm font-semibold">Chemotherapy</span>
                  <span className="text-muted-foreground text-sm">nausea, fatigue, mouth sores, low blood counts, hair loss</span>
                </div>
                <div className="flex items-start space-x-3" data-testid="treatment-radiotherapy">
                  <span className="bg-chart-2/20 text-chart-2 px-3 py-1 rounded-full text-sm font-semibold">Radiotherapy</span>
                  <span className="text-muted-foreground text-sm">skin changes, tiredness, local hair loss</span>
                </div>
                <div className="flex items-start space-x-3" data-testid="treatment-immunotherapy">
                  <span className="bg-chart-3/20 text-chart-3 px-3 py-1 rounded-full text-sm font-semibold">Immunotherapy</span>
                  <span className="text-muted-foreground text-sm">immune-related inflammation (e.g., skin, gut, lungs)</span>
                </div>
                <div className="flex items-start space-x-3" data-testid="treatment-targeted">
                  <span className="bg-chart-4/20 text-chart-4 px-3 py-1 rounded-full text-sm font-semibold">Targeted therapy</span>
                  <span className="text-muted-foreground text-sm">rash, blood pressure changes</span>
                </div>
                <div className="flex items-start space-x-3" data-testid="treatment-surgery">
                  <span className="bg-chart-5/20 text-chart-5 px-3 py-1 rounded-full text-sm font-semibold">Surgery</span>
                  <span className="text-muted-foreground text-sm">pain, wound healing, mobility changes</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-foreground mb-4">Key Principles</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check-circle text-primary mt-0.5"></i>
                  <span>Report new or worsening symptoms to your care team quickly.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check-circle text-primary mt-0.5"></i>
                  <span>Preventive measures (anti-nausea meds, mouth care, skin care) help—ask before symptoms start.</span>
                </li>
                <li className="flex items-start space-x-2">
                  <i className="fas fa-check-circle text-primary mt-0.5"></i>
                  <span>Keep a symptom diary to share with your doctor.</span>
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Side Effect Tips */}
      <Card>
        <CardHeader>
          <CardTitle>Practical Tips by Side Effect</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div className="border-l-4 border-primary pl-4" data-testid="tip-nausea">
              <h4 className="font-semibold text-foreground mb-2">Nausea & vomiting</h4>
              <p className="text-muted-foreground text-sm">
                Take anti-nausea medicines as prescribed, try small bland meals, stay hydrated and avoid strong smells.
              </p>
            </div>
            
            <div className="border-l-4 border-chart-2 pl-4" data-testid="tip-fatigue">
              <h4 className="font-semibold text-foreground mb-2">Fatigue</h4>
              <p className="text-muted-foreground text-sm">
                Pace yourself, prioritise important tasks, consider light activity as tolerated and speak with your team about anemia or sleep problems.
              </p>
            </div>
            
            <div className="border-l-4 border-chart-3 pl-4" data-testid="tip-mouth">
              <h4 className="font-semibold text-foreground mb-2">Mouth sores & dry mouth</h4>
              <p className="text-muted-foreground text-sm">
                Use gentle mouth rinses (salt/soda rinse), avoid alcohol-based mouthwash, maintain oral hygiene and see dental support if severe.
              </p>
            </div>
            
            <div className="border-l-4 border-chart-4 pl-4" data-testid="tip-blood-counts">
              <h4 className="font-semibold text-foreground mb-2">Low blood counts (infection risk, bleeding)</h4>
              <p className="text-muted-foreground text-sm">
                Avoid crowds if neutropenic, watch for fever, report any bleeding, and follow instructions about vaccines and infection prevention.
              </p>
            </div>
            
            <div className="border-l-4 border-chart-5 pl-4" data-testid="tip-skin">
              <h4 className="font-semibold text-foreground mb-2">Skin changes</h4>
              <p className="text-muted-foreground text-sm">
                Use mild soap, moisturiser, gentle clothing; protect treated skin from sun and follow radiotherapy skin-care instructions from your team.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Emergency Contact */}
      <div className="bg-destructive/10 border border-destructive/20 rounded-xl p-6">
        <h2 className="text-xl font-semibold text-destructive mb-4 flex items-center">
          <i className="fas fa-phone text-destructive mr-3"></i>
          When to Call Your Care Team
        </h2>
        <div className="bg-destructive/20 p-4 rounded-lg" data-testid="emergency-symptoms">
          <p className="text-destructive font-semibold mb-2">Call right away for:</p>
          <p className="text-destructive text-sm">
            fever (over 100.4°F/38°C), uncontrolled bleeding, severe shortness of breath, severe pain not controlled by medication, 
            sudden confusion or signs of severe infection.
          </p>
        </div>
        <p className="text-muted-foreground text-sm mt-4">
          Keep your care team phone numbers and after-hours instructions handy so you can act fast.
        </p>
      </div>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <a 
              href="https://www.cancer.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-primary hover:underline font-medium p-3 bg-muted/10 rounded-lg transition-colors hover:bg-accent/20"
              data-testid="resource-cancer-org"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              American Cancer Society — Managing side effects
            </a>
            <a 
              href="https://www.cancer.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-primary hover:underline font-medium p-3 bg-muted/10 rounded-lg transition-colors hover:bg-accent/20"
              data-testid="resource-cancer-gov"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              National Cancer Institute — Side effects
            </a>
            <a 
              href="https://www.nhs.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-primary hover:underline font-medium p-3 bg-muted/10 rounded-lg transition-colors hover:bg-accent/20"
              data-testid="resource-nhs"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              NHS — Radiotherapy & chemo advice
            </a>
            <a 
              href="https://www.cancerresearchuk.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-primary hover:underline font-medium p-3 bg-muted/10 rounded-lg transition-colors hover:bg-accent/20"
              data-testid="resource-cancer-research"
            >
              <i className="fas fa-external-link-alt mr-2"></i>
              Cancer Research UK — Practical coping
            </a>
          </div>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="text-center text-muted-foreground text-sm bg-muted/20 rounded-lg p-4">
        This tool provides general advice. It does not replace professional medical care. 
        Always follow instructions from your oncology team.
      </div>
    </main>
  );
}
