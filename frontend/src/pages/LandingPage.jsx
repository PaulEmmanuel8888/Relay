import LandingChatPreview from "../components/LandingChatPreview";

const LandingPage = () => {
  return (
    <main className="min-h-screen bg-base-100 flex items-center">
      <div
        className="
          max-w-7xl 
          mx-auto 
          px-6
          py-10
          grid 
          md:grid-cols-2 
          gap-12 
          items-center
        "
      >
        {/* Left Content */}
        <section className="text-center md:text-left">
          <h1
            className="
              text-5xl 
              md:text-7xl 
              font-bold 
              text-base-content
              leading-tight
            "
          >
            Conversations that
            <span className="text-primary"> connect.</span>
          </h1>

          <p
            className="
              mt-6 
              text-lg 
              text-base-content/70
              max-w-xl
            "
          >
            Relay brings people together with fast, simple, and real-time
            messaging.
          </p>

          <div
            className="
            mt-8 
            flex 
            justify-center 
            md:justify-start
            gap-4
          "
          >
            <button className="btn btn-primary">Get Started</button>

            <button className="btn btn-outline">Login</button>
          </div>

          {/* Mobile Preview */}
          <div
            className="
            mt-12
            flex
            md:hidden
            justify-center
          "
          >
            <LandingChatPreview compact />
          </div>
        </section>

        {/* Desktop Preview */}
        <section
          className="
          hidden 
          md:flex 
          justify-center
        "
        >
          <LandingChatPreview />
        </section>
      </div>
    </main>
  );
};

export default LandingPage;
