const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute w-96 h-96 rounded-full bg-primary/5 blur-3xl animate-orb-1" />
      <div className="absolute w-80 h-80 rounded-full bg-accent/5 blur-3xl animate-orb-2" />
      <div className="absolute w-72 h-72 rounded-full bg-neon-teal/5 blur-3xl animate-orb-3" />
      <div className="absolute w-64 h-64 rounded-full bg-neon-blue/5 blur-3xl animate-orb-4" />

      {/* Grid lines */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--neon-cyan) / 0.3) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--neon-cyan) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Scanning line */}
      <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-scan" />

      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 rounded-full bg-primary/30 animate-particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 6}s`,
          }}
        />
      ))}
    </div>
  );
};

export default AnimatedBackground;
