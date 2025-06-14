"use client";

import dynamic from "next/dynamic";
import Container from "./Container";
import AutoMultiLineTyping from "./AutoMultiLineTyping";
import { ButtonJoin } from "./ButtonJoin";
import Image from "next/image";

const AnimationHero = dynamic(() => import("@/components/AnimationHero"));

export default function Hero() {
  return (
    <section className="px-4 overflow-hidden -mt-20 relative">
      <Container>
        <AnimationHero></AnimationHero>
        <div className="mt-[320px] text-center flex items-center flex-col gap-[32px] relative z-10">
          <AutoMultiLineTyping
            text={`A Lending P2P Protocol Trusted by Everyone`}
            lastWord="Everyone"
            speed={80}
          />
          <p className="[font-family:var(--font-heading)] text-[36px] font-extrabold leading-[100%] tracking-[-2.16px] my-[70px]">
            Borrow, Stake, Lend with Digital & Real-World Assets
          </p>
          <ButtonJoin>Buy Now — Join the Presale</ButtonJoin>
          <p className="text-[var(--White)] text-[22px] font-medium leading-normal tracking-[-1.32px] mt-[123px] max-w-[570px] w-full">
            The first AI-powered Web3 staking & lending platform uniting 100+
            cryptocurrencies with gold, art, and luxury assets, backed by
            ChainLink and Brinks.
          </p>
          <div className="w-full flex items-center justify-between gap-4 py-4 mt-[52px] mb-[185px]">
            <div className="text-[var(--Neutral-Light)] text-[32px] font-medium leading-none">
              Partnerships:
            </div>
            <div className="flex">
              <Image
                src="/chainlink.svg"
                alt="Chainlink logo"
                width={158}
                height={48}
              />
            </div>
            <div className="flex">
              <Image
                src="/onfide.svg"
                alt="Onfide logo"
                width={206}
                height={48}
              />
            </div>
            <div className="flex">
              <Image
                src="/brinks.svg"
                alt="Brinks logo"
                width={187}
                height={32}
              />
            </div>
            <div className="flex">
              <Image
                src="/molten.svg"
                alt="Molten logo"
                width={134}
                height={32}
              />
            </div>
            <div className="flex">
              <Image
                src="/chainlink.svg"
                alt="Chainlink logo"
                width={158}
                height={48}
              />
            </div>
            <div className="flex">
              <Image
                src="/onfide.svg"
                alt="Onfide logo"
                width={206}
                height={48}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
