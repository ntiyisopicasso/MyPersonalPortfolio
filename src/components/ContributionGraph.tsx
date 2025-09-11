import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const ContributionGraph = () => {
  // Generate mock contribution data for the last 365 days
  const generateContributionData = () => {
    const data = [];
    const today = new Date();
    
    for (let i = 364; i >= 0; i--) {
      const date = new Date(today);
      date.setDate(date.getDate() - i);
      
      // Generate realistic contribution patterns
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
      
      // Higher chance of contributions on weekdays
      let contributions = 0;
      const random = Math.random();
      
      if (isWeekend) {
        // Less activity on weekends
        if (random < 0.7) contributions = 0;
        else if (random < 0.85) contributions = Math.floor(Math.random() * 3) + 1;
        else if (random < 0.95) contributions = Math.floor(Math.random() * 6) + 4;
        else contributions = Math.floor(Math.random() * 5) + 10;
      } else {
        // More activity on weekdays
        if (random < 0.3) contributions = 0;
        else if (random < 0.6) contributions = Math.floor(Math.random() * 4) + 1;
        else if (random < 0.85) contributions = Math.floor(Math.random() * 8) + 5;
        else contributions = Math.floor(Math.random() * 10) + 13;
      }
      
      data.push({
        date: date.toISOString().split('T')[0],
        count: contributions,
        level: contributions === 0 ? 0 : contributions < 3 ? 1 : contributions < 7 ? 2 : contributions < 12 ? 3 : 4
      });
    }
    return data;
  };

  const contributionData = generateContributionData();
  
  // Calculate total contributions
  const totalContributions = contributionData.reduce((sum, day) => sum + day.count, 0);
  
  // Get contribution level color
  const getLevelColor = (level: number) => {
    switch (level) {
      case 0: return 'bg-muted/30';
      case 1: return 'bg-primary/20';
      case 2: return 'bg-primary/40';
      case 3: return 'bg-primary/70';
      case 4: return 'bg-primary';
      default: return 'bg-muted/30';
    }
  };

  // Group data by weeks
  const weeks = [];
  for (let i = 0; i < contributionData.length; i += 7) {
    weeks.push(contributionData.slice(i, i + 7));
  }

  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Coding Activity
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Consistent coding activity over the past year - {totalContributions.toLocaleString()} contributions in the last year
          </p>
        </div>

        <Card className="bg-gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="text-xl text-foreground">Contribution Graph</CardTitle>
            <CardDescription>
              {totalContributions.toLocaleString()} contributions in the last year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="flex flex-col items-start gap-2 min-w-max">
                {/* Month labels */}
                <div className="flex gap-[3px] ml-6">
                  {months.map((month, i) => (
                    <div key={month} className="text-xs text-muted-foreground w-[52px] text-left">
                      {i % 3 === 0 ? month : ''}
                    </div>
                  ))}
                </div>

                <div className="flex gap-1">
                  {/* Day labels */}
                  <div className="flex flex-col gap-[3px] w-5 text-xs text-muted-foreground">
                    {weekDays.map((day, i) => (
                      <div key={day} className="h-3 flex items-center">
                        {i % 2 === 1 ? day : ''}
                      </div>
                    ))}
                  </div>

                  {/* Contribution grid */}
                  <div className="flex gap-[3px]">
                    {weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="flex flex-col gap-[3px]">
                        {week.map((day, dayIndex) => (
                          <div
                            key={`${weekIndex}-${dayIndex}`}
                            className={`w-3 h-3 rounded-sm border border-border/20 ${getLevelColor(day.level)} transition-all duration-200 hover:scale-110 hover:border-primary/50 cursor-pointer`}
                            title={`${day.count} contributions on ${day.date}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Legend */}
                <div className="flex items-center gap-2 mt-4 text-xs text-muted-foreground">
                  <span>Less</span>
                  <div className="flex gap-1">
                    {[0, 1, 2, 3, 4].map((level) => (
                      <div
                        key={level}
                        className={`w-3 h-3 rounded-sm border border-border/20 ${getLevelColor(level)}`}
                      />
                    ))}
                  </div>
                  <span>More</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContributionGraph;