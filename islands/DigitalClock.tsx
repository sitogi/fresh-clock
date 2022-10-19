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
    }, 1000);
  }, []);

  return (
    <div
      class={tw(
        "flex justify-center text-9xl text-white font-mono gap-20 flex-wrap",
      )}
    >
      <span>
        {formatDate(date, "yyyy-MM-dd")}
      </span>
      <span>
        {formatDate(date, "HH:mm:ss")}
      </span>
    </div>
  );
}
