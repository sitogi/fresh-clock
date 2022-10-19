import { useEffect, useState } from "preact/hooks";
import { tw } from "twind";

const formatDate = (date: Date, format: string): string => {
  return format
    .replace(/yyyy/g, `${date.getFullYear()}`)
    .replace(/MM/g, `0${date.getMonth() + 1}`.slice(-2))
    .replace(/dd/g, `0${date.getDate()}`.slice(-2))
    .replace(/HH/g, `0${date.getHours()}`.slice(-2))
    .replace(/mm/g, `0${date.getMinutes()}`.slice(-2))
    .replace(/ss/g, `0${date.getSeconds()}`.slice(-2))
    .replace(/SSS/g, `00${date.getMilliseconds()}`.slice(-3));
};

export default function DigitalClock() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    setInterval(() => {
      setDate(new Date());
    }, 1);
  }, []);

  return (
    <div
      class={tw(
        "grid place-content-center gap-8 text-4xl sm:text-6xl md:text-8xl 2xl:text-9xl text-white font-mono",
      )}
    >
      <div class={tw("mx-auto")}>
        {formatDate(date, "yyyy-MM-dd")}
      </div>
      <div>
        {formatDate(date, "HH:mm:ss.SSS")}
      </div>
    </div>
  );
}
