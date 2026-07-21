const LandingChatPreview = ({ compact }) => {
  return (
    <div
      className={`
        bg-base-200
        rounded-3xl
        shadow-2xl
        p-6
        w-full
        max-w-md
        border border-base-300
        bg-linear-to-r from-text-primary via-grey-500 to-white
        ${compact ? "scale-90" : ""}
      `}
    >
      {/* App Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2"></div>
      </div>

      {/* User Header */}
      <div
        className="
          flex 
          items-center 
          gap-3 
          mb-6
        "
      >
        <div className="avatar placeholder">
          <div
            className="
              bg-primary
              text-primary-content
              rounded-full
              w-10
              flex
              justify-center
              items-center
            "
          >
            <span>TS</span>
          </div>
        </div>

        <div>
          <h3 className="font-bold">The Stack</h3>

          <p
            className="
              text-sm 
              text-success
            "
          >
            ● Online
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-3">
        <div
          className="
            chat 
            chat-start 
            message-animation
          "
        >
          <div className="chat-bubble">Hey! Are you online?</div>
        </div>

        <div
          className="
            chat 
            chat-end 
            message-animation
            [animation-delay:300ms]
          "
        >
          <div
            className="
              chat-bubble
              chat-bubble-primary
            "
          >
            Yep!
          </div>
        </div>

        <div
          className="
            chat 
            chat-start
            message-animation
            [animation-delay:600ms]
          "
        >
          <div className="chat-bubble">Let's build something.</div>
        </div>
      </div>

      {/* Typing Indicator */}
      <div
        className="
          mt-5
          flex
          items-center
          gap-1
          text-base-content/50
        "
      >
        <span className="text-xs mr-1">typing</span>

        <span
          className="
            size-2
            bg-primary
            rounded-full
            animate-bounce
          "
        />

        <span
          className="
            size-2
            bg-primary
            rounded-full
            animate-bounce
            [animation-delay:200ms]
          "
        />

        <span
          className="
            size-2
            bg-primary
            rounded-full
            animate-bounce
            [animation-delay:400ms]
          "
        />
      </div>
    </div>
  );
};

export default LandingChatPreview;
