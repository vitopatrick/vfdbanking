import { useEffect } from "react";

export const useChatSupport = () => {
  useEffect(() => {
    // Your Tawk.to script
    var Tawk_API: any = Tawk_API || {};
    var Tawk_LoadStart = new Date();

    (function () {
      var s1: any = document.createElement("script"),
        s0: any = document.getElementsByTagName("script")[0];
      s1.async = true;
      s1.src = "https://embed.tawk.to/655f8d94da19b3621790202a/1hfuk23ej";
      s1.charset = "UTF-8";
      s1.setAttribute("crossorigin", "*");
      s0.parentNode.insertBefore(s1, s0);

      // Cleanup function
      return () => {
        // Remove Tawk.to script when the component unmounts
        document.head.removeChild(s1);
      };
    })();
  }, []); 
};
