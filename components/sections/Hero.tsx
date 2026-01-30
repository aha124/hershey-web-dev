'use client';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#fdf8f3]">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0, opacity: 1 }}
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* Cream overlay */}
      <div
        className="absolute inset-0"
        style={{ zIndex: 1, backgroundColor: 'rgba(253, 248, 243, 0.4)' }}
      />

      {/* Content */}
      <div className="relative px-4 text-center" style={{ zIndex: 2 }}>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4a3728] mb-6">
          Websites for Local Businesses.
          <br />
          Built by Your Neighbor.
        </h1>

        <p className="text-lg md:text-xl text-[#5c4a3d] max-w-2xl mx-auto mb-8">
          I&apos;m Anthony—a web developer right here in Hershey, PA. I help
          small businesses get online with simple, professional websites. No
          monthly fees, no hassle, no jargon.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#work"
            className="px-8 py-3 bg-[#d4a574] text-white rounded-lg font-medium hover:bg-[#c49464] transition-colors"
          >
            See My Work
          </a>
          <a
            href="#contact"
            className="text-[#4a3728] underline hover:no-underline"
          >
            Or just say hi
          </a>
        </div>
      </div>
    </section>
  );
}
