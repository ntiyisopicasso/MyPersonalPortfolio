import { motion } from "framer-motion";
import { useGitHubContributions, useGitHubProfile } from "@/hooks/useGitHubData";
import { Skeleton } from "@/components/ui/skeleton";

const GitHubActivity = () => {
  const { data: contributions, isLoading: loadingContributions } = useGitHubContributions();
  const { data: profile, isLoading: loadingProfile } = useGitHubProfile();

  const getColor = (level: number) => {
    const colors = [
      "bg-muted/30",
      "bg-primary/30",
      "bg-primary/50",
      "bg-primary/70",
      "bg-primary",
    ];
    return colors[level] || colors[0];
  };

  const totalContributions = contributions
    ?.flat()
    .reduce((sum, day) => sum + day.count, 0) || 0;

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  if (loadingContributions || loadingProfile) {
    return (
      <section id="activity" className="py-24 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </div>
          <Skeleton className="h-48 w-full rounded-xl" />
        </div>
      </section>
    );
  }

  return (
    <section id="activity" className="py-24 px-6">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            Coding <span className="text-gradient">Activity</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {totalContributions.toLocaleString()} contributions in the last year
            {profile && ` • ${profile.public_repos} public repos`}
          </p>
        </motion.div>

        <motion.div
          className="bg-gradient-card rounded-xl p-8 border border-border shadow-card overflow-x-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold font-heading text-primary">
              Contribution Graph
            </h3>
            {profile && (
              <a
                href={profile.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                @{profile.login}
              </a>
            )}
          </div>

          <div className="flex gap-1">
            {/* Day labels */}
            <div className="flex flex-col gap-1 mr-2 text-xs text-muted-foreground pt-6">
              <span className="h-3 leading-3">Mon</span>
              <span className="h-3 leading-3 invisible">Tue</span>
              <span className="h-3 leading-3">Wed</span>
              <span className="h-3 leading-3 invisible">Thu</span>
              <span className="h-3 leading-3">Fri</span>
              <span className="h-3 leading-3 invisible">Sat</span>
              <span className="h-3 leading-3 invisible">Sun</span>
            </div>

            {/* Contribution grid */}
            <div className="flex flex-col gap-1">
              {/* Month labels */}
              <div className="flex gap-1 mb-1 h-4">
                {contributions && contributions.length > 0 && 
                  months.map((month, i) => {
                    const weekIndex = Math.floor((i / 12) * contributions.length);
                    return (
                      <span
                        key={month}
                        className="text-xs text-muted-foreground"
                        style={{ 
                          marginLeft: i === 0 ? 0 : `${Math.floor(contributions.length / 12) * 14 - 24}px`,
                          display: i % 2 === 0 ? 'block' : 'none'
                        }}
                      >
                        {month}
                      </span>
                    );
                  })
                }
              </div>

              {/* Grid */}
              <div className="flex gap-1">
                {contributions?.map((week, weekIndex) => (
                  <div key={weekIndex} className="flex flex-col gap-1">
                    {week.map((day, dayIndex) => (
                      <motion.div
                        key={`${weekIndex}-${dayIndex}`}
                        className={`w-3 h-3 rounded-sm ${getColor(day.level)} transition-colors hover:ring-1 hover:ring-primary/50 cursor-pointer`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: weekIndex * 0.005,
                          duration: 0.2,
                        }}
                        title={`${day.count} contributions on ${day.date}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="flex items-center justify-end gap-2 mt-6 text-xs text-muted-foreground">
            <span>Less</span>
            {[0, 1, 2, 3, 4].map((level) => (
              <div
                key={level}
                className={`w-3 h-3 rounded-sm ${getColor(level)}`}
              />
            ))}
            <span>More</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubActivity;
