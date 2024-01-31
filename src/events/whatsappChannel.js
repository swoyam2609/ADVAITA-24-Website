import { useEffect } from "react";

export default function Whatsapp() {
  useEffect(() => {
    window.location.href =
      "https://whatsapp.com/channel/0029VaMNp5kGZNCuqSZBms1S";
  }, []);

  return null;
}
