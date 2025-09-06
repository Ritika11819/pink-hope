import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Nutrition() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Header */}
      <div className="bg-gradient-to-r from-accent to-accent/80 text-accent-foreground rounded-2xl p-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
              <i className="fas fa-apple-alt text-2xl"></i>
            </div>
            <div>
              <h1 className="text-3xl font-bold">Nutrition During Cancer Treatment</h1>
              <p className="text-accent-foreground/90">Practical, gentle guidance to support energy, immunity and comfort</p>
            </div>
          </div>
          <Button
            onClick={handlePrint}
            variant="secondary"
            className="hidden md:flex"
            data-testid="button-print-guide"
          >
            <i className="fas fa-print mr-2"></i>
            Print Guide
          </Button>
        </div>
      </div>

      {/* Quick Principles */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <i className="fas fa-lightbulb text-primary mr-3"></i>
            Quick Principles
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-6">
            Nutrition needs often change during treatment. The goals are to maintain strength, preserve lean body mass, 
            prevent or treat weight loss, and keep you as comfortable as possible.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-muted/10 p-4 rounded-lg" data-testid="principle-calories">
              <h3 className="font-semibold text-foreground mb-2">Calories</h3>
              <p className="text-muted-foreground text-sm">
                Eat frequent small meals or snacks if appetite is low. Choose energy-dense foods if weight gain is needed.
              </p>
            </div>
            <div className="bg-muted/10 p-4 rounded-lg" data-testid="principle-protein">
              <h3 className="font-semibold text-foreground mb-2">Protein</h3>
              <p className="text-muted-foreground text-sm">
                Prioritise protein at each meal (eggs, dairy, legumes, fish, poultry, tofu, protein shakes) to help healing and preserve muscle.
              </p>
            </div>
            <div className="bg-muted/10 p-4 rounded-lg" data-testid="principle-hydration">
              <h3 className="font-semibold text-foreground mb-2">Hydration</h3>
              <p className="text-muted-foreground text-sm">
                Sip fluids regularly — water, milk, oral rehydration, broths; treat mouth sores and nausea with cool drinks or ice chips.
              </p>
            </div>
            <div className="bg-muted/10 p-4 rounded-lg" data-testid="principle-safety">
              <h3 className="font-semibold text-foreground mb-2">Food Safety</h3>
              <p className="text-muted-foreground text-sm">
                When white blood cell counts are low, avoid raw/undercooked eggs, seafood, unpasteurised dairy, and unwashed produce.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Managing Eating Problems */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <i className="fas fa-utensils text-primary mr-3"></i>
            Manage Common Eating Problems
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div data-testid="problem-nausea">
              <h3 className="font-semibold text-foreground mb-3">Nausea</h3>
              <ul className="text-muted-foreground space-y-1 text-sm list-disc list-inside">
                <li>Small bland meals, dry crackers before getting up, avoid strong smells.</li>
                <li>Cool foods are often better than hot ones. Ginger (tea, chews) and mint may help.</li>
                <li>Take anti-nausea meds as prescribed before meals when advised by your team.</li>
              </ul>
            </div>
            
            <div data-testid="problem-mouth-sores">
              <h3 className="font-semibold text-foreground mb-3">Mouth sores & taste changes</h3>
              <ul className="text-muted-foreground space-y-1 text-sm list-disc list-inside">
                <li>Soft, moist, cool foods (yogurt, smoothies, mashed potatoes, well-cooked cereals) are gentler.</li>
                <li>Avoid spicy, acidic, or very salty foods if they sting. Try plastic cutlery if metallic taste is a problem.</li>
                <li>Frequent mouth rinses (salt-soda) as recommended by dental/oncology team.</li>
              </ul>
            </div>
            
            <div data-testid="problem-appetite">
              <h3 className="font-semibold text-foreground mb-3">Loss of appetite / weight loss</h3>
              <ul className="text-muted-foreground space-y-1 text-sm list-disc list-inside">
                <li>Eat calorie-dense snacks: nut butters, full-fat dairy, smoothies with milk and protein powder, avocados.</li>
                <li>Try liquid nutrition supplements if eating is difficult — ask your team for brand/type guidance.</li>
                <li>Focus on protein first if you can't finish a meal — a small portion of meat/legume/egg is better than none.</li>
              </ul>
            </div>

            <div data-testid="problem-diarrhea">
              <h3 className="font-semibold text-foreground mb-3">Diarrhea or digestive upset</h3>
              <ul className="text-muted-foreground space-y-1 text-sm list-disc list-inside">
                <li>Stay hydrated with oral rehydration solutions; small frequent sips.</li>
                <li>Limit high-fiber, greasy, or very sweet foods during acute diarrhea; reintroduce gentle foods gradually.</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Sample Meal Plan */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <i className="fas fa-clipboard-list text-primary mr-3"></i>
            Sample Meal Plan Ideas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-muted/10 p-4 rounded-lg border border-dashed border-border" data-testid="meal-breakfast">
              <h3 className="font-semibold text-foreground mb-3">Breakfast</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Oat porridge made with milk, mashed banana, nut butter and cinnamon</li>
                <li>Boiled egg or yogurt on the side</li>
              </ul>
            </div>
            
            <div className="bg-muted/10 p-4 rounded-lg border border-dashed border-border" data-testid="meal-lunch">
              <h3 className="font-semibold text-foreground mb-3">Lunch</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Chicken or lentil soup with soft vegetables, rice or bread</li>
                <li>Avocado on toast or a side of cottage cheese</li>
              </ul>
            </div>
            
            <div className="bg-muted/10 p-4 rounded-lg border border-dashed border-border" data-testid="meal-snack">
              <h3 className="font-semibold text-foreground mb-3">Snack</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Smoothie: milk or plant milk + protein powder + fruit + nut butter</li>
                <li>Crackers with hummus, cheese or nut butter</li>
              </ul>
            </div>
            
            <div className="bg-muted/10 p-4 rounded-lg border border-dashed border-border" data-testid="meal-dinner">
              <h3 className="font-semibold text-foreground mb-3">Dinner</h3>
              <ul className="text-muted-foreground text-sm space-y-1">
                <li>Baked fish or tofu, mashed potato or soft rice, cooked vegetables</li>
                <li>Yogurt with honey for dessert</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Practical Tips */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <i className="fas fa-shopping-cart text-primary mr-3"></i>
            Practical Kitchen & Shopping Tips
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li className="flex items-start space-x-2">
              <i className="fas fa-check-circle text-primary mt-0.5"></i>
              <span>Batch-cook single-ingredient bases (rice, soups, boiled potatoes) and freeze portions for low-energy days.</span>
            </li>
            <li className="flex items-start space-x-2">
              <i className="fas fa-check-circle text-primary mt-0.5"></i>
              <span>Choose ready-to-eat protein options (cooked rotisserie chicken, canned tuna, Greek yogurt) when cooking is tiring.</span>
            </li>
            <li className="flex items-start space-x-2">
              <i className="fas fa-check-circle text-primary mt-0.5"></i>
              <span>Use oral nutrition supplements when needed — not a failure, but a tool to keep strength up.</span>
            </li>
          </ul>
        </CardContent>
      </Card>

      {/* Emergency Contact Info */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>When to Contact Your Team</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-muted-foreground space-y-2 text-sm">
              <li>• Unintentional weight loss {'>'} 5% over 1 month or {'>'} 10% over 6 months</li>
              <li>• Unable to eat or drink for more than 48 hours</li>
              <li>• Severe persistent nausea, vomiting, diarrhea or dehydration</li>
              <li>• Difficulty swallowing or severe mouth/throat pain</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Tips</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">Small changes add up:</p>
            <ul className="text-muted-foreground space-y-1 text-sm">
              <li>• Add milk powder to soups for extra calories and protein</li>
              <li>• Mix fruit into yogurt instead of sugary desserts</li>
              <li>• Snack frequently — every 2–3 hours if possible</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Resources */}
      <Card>
        <CardHeader>
          <CardTitle>Resources</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <a 
              href="https://www.cancer.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-primary hover:underline font-medium"
              data-testid="link-cancer-org"
            >
              American Cancer Society — Nutrition & Eating
            </a>
            <a 
              href="https://www.cancer.gov" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-primary hover:underline font-medium"
              data-testid="link-cancer-gov"
            >
              National Cancer Institute — Eating & Nutrition
            </a>
            <a 
              href="https://www.nhs.uk" 
              target="_blank" 
              rel="noopener noreferrer"
              className="block text-primary hover:underline font-medium"
              data-testid="link-nhs"
            >
              NHS — Food and diet during cancer treatment
            </a>
          </div>
          <p className="text-muted-foreground text-sm mt-4">
            Tip: Use the Print Guide button above to get a clean printable version for caregivers.
          </p>
        </CardContent>
      </Card>

      {/* Disclaimer */}
      <div className="text-center text-muted-foreground text-sm bg-muted/20 rounded-lg p-4">
        This guide provides general advice only and does not replace personalised medical or dietetic care. 
        Speak with your oncology team or a registered dietitian for tailored guidance.
      </div>
    </main>
  );
}
