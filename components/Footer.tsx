"use client";

export const Footer = () => {
  return (
    <div className="bg-richblack-800">
      <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
        <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
          <nav className="grow ">
            <img className="max-w-[204px]" src="/brand/v2_brand.png" />
            <a
              className="link font-['inter'] text-xs text-slate-100 link-hover"
              href="mailto:hello@genfluence.ai"
            >
              hello@genfluence.ai
            </a>
          </nav>
          <div className="flex gap-5 md:gap-40 ">
            <nav className="grow flex flex-col items-start gap-4 flex-wrap">
              <h6 className=" text-brand-color-light mb-3 text-base font-['outfit'] leading-[24px] font-bold ">
                Support
              </h6>
              <a href="https://t.me/genfluenceai">Telegram&nbsp;community</a>
              <a href="/contact">Contact us</a>
              <a href="/about/refund">Refund Policy</a>
            </nav>
            <nav className="grow flex flex-col items-start gap-4 flex-wrap">
              <h6 className=" text-brand-color-light mb-3 text-base font-['outfit'] leading-[24px] font-bold ">
                Legal
              </h6>
              <a href="/about/privacy">Privacy Policy</a>
              <a href="/about/terms">Terms of Service</a>
              <a href="/about/content_moderation">Content Moderation</a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};
