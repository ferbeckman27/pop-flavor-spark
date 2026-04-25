import { useEffect, useState } from "react";
import limaoCan from "@/assets/limao-refrigerante.png";
import maracujaCan from "@/assets/maracuja-refrigerante.png";
import uvaCan from "@/assets/uva-refrigerante.png";
import abacateCan from "@/assets/abacate-refrigerante.png";
import laranjaCan from "@/assets/laranja-refrigerante.png";
import morangoCan from "@/assets/morango-refrigerante.png";
import limaoFruit from "@/assets/limao-foreground.png";
import maracujaFruit from "@/assets/maracuja-foreground.png";
import uvaFruit from "@/assets/uva-foreground.png";
import abacateFruit from "@/assets/abacate-foreground.png";
import laranjaFruit from "@/assets/laranja-foreground.png";
import morangoFruit from "@/assets/morango-foreground.png";

interface Flavor {
  name: string;
  word: string;
  bg: string;
  textColor: string;
  can: string;
  fruit: string;
}

const FLAVORS: Flavor[] = [
  { name: "Morango", word: "STRAWBERRY", bg: "#e63946", textColor: "#ffffff", can: morangoCan, fruit: morangoFruit },
  { name: "Laranja", word: "ORANGE", bg: "#ff7a1a", textColor: "#ffffff", can: laranjaCan, fruit: laranjaFruit },
  { name: "Limão", word: "LIME", bg: "#3fa34d", textColor: "#ffffff", can: limaoCan, fruit: limaoFruit },
  { name: "Maracujá", word: "PASSION", bg: "#f4a300", textColor: "#ffffff", can: maracujaCan, fruit: maracujaFruit },
  { name: "Uva", word: "GRAPE", bg: "#5b2a86", textColor: "#ffffff", can: uvaCan, fruit: uvaFruit },
  { name: "Abacate", word: "AVOCADO", bg: "#4a7c2a", textColor: "#ffffff", can: abacateCan, fruit: abacateFruit },
];

export function FlavorHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % FLAVORS.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  const flavor = FLAVORS[index];

  return (
    <section
      className="relative w-full overflow-hidden transition-colors duration-700"
      style={{ backgroundColor: flavor.bg }}
      aria-label={`Sabor ${flavor.name}`}
    >
      <div className="relative mx-auto flex h-[78vh] min-h-[480px] max-w-7xl items-center justify-center px-4">
        {/* Background flavor word */}
        <h2
          key={`word-${index}`}
          className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 select-none text-center font-black tracking-tighter animate-fade-in"
          style={{
            color: flavor.textColor,
            fontSize: "clamp(4rem, 18vw, 16rem)",
            lineHeight: 0.85,
            letterSpacing: "-0.04em",
            textShadow: "0 4px 30px rgba(0,0,0,0.15)",
          }}
        >
          {flavor.word}
        </h2>

        {/* Floating fruit pieces — left */}
        <img
          key={`fl-${index}`}
          src={flavor.fruit}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-0 top-1/2 h-48 w-48 -translate-y-1/2 object-contain opacity-90 animate-fade-in md:h-72 md:w-72"
          style={{ animation: "floatY 5s ease-in-out infinite" }}
        />
        {/* Floating fruit pieces — right */}
        <img
          key={`fr-${index}`}
          src={flavor.fruit}
          alt=""
          aria-hidden
          className="pointer-events-none absolute right-0 top-1/3 h-40 w-40 object-contain opacity-90 animate-fade-in md:h-64 md:w-64"
          style={{ animation: "floatY 6s ease-in-out infinite reverse" }}
        />
        {/* Small fruit top */}
        <img
          src={flavor.fruit}
          alt=""
          aria-hidden
          className="pointer-events-none absolute left-1/4 top-6 h-20 w-20 object-contain opacity-80 md:h-28 md:w-28"
          style={{ animation: "floatY 4s ease-in-out infinite" }}
        />
        {/* Small fruit bottom */}
        <img
          src={flavor.fruit}
          alt=""
          aria-hidden
          className="pointer-events-none absolute bottom-8 right-1/4 h-24 w-24 object-contain opacity-80 md:h-32 md:w-32"
          style={{ animation: "floatY 5.5s ease-in-out infinite reverse" }}
        />

        {/* The CAN */}
        <img
          key={`can-${index}`}
          src={flavor.can}
          alt={`Lata ${flavor.name}`}
          className="relative z-10 h-[60vh] max-h-[520px] w-auto object-contain drop-shadow-2xl animate-scale-in"
          style={{ animation: "canFloat 4s ease-in-out infinite" }}
        />

        {/* Flavor label bottom */}
        <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-white/80">
            Sabor original
          </p>
          <p className="mt-1 text-2xl font-bold text-white md:text-3xl">{flavor.name}</p>
        </div>

        {/* Indicator dots */}
        <div className="absolute bottom-6 right-6 z-20 flex gap-2">
          {FLAVORS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Mostrar sabor ${FLAVORS[i].name}`}
              className={`h-2 rounded-full transition-all ${
                i === index ? "w-8 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes floatY {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(3deg); }
        }
        @keyframes canFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </section>
  );
}