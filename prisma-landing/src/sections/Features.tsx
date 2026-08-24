import { motion } from "framer-motion";
import WordsPullUpMultiStyle from "../components/shared/WordsPullUpMultiStyle";
import FeatureCard from "../components/shared/FeatureCard";

const HERO_CARD_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4";

const ICONS = {
  storyboard:
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85",
  critiques:
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85",
  immersion:
    "https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85",
};

export default function Features() {
  return (
    <section className="relative min-h-screen bg-black px-4 sm:px-6 md:px-10 py-20 sm:py-28">
      <div className="bg-noise absolute inset-0 opacity-[0.15] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto">
        <div className="text-center">
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block"
            segments={[
              { text: "Studio-grade workflows for visionary creators.", className: "text-primary" },
            ]}
          />
          <WordsPullUpMultiStyle
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-normal block mt-2"
            segments={[
              { text: "Built for pure vision. Powered by art.", className: "text-gray-500" },
            ]}
          />
        </div>

        <div className="mt-12 sm:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]">
          {/* Card 1 - video */}
          <motion.div
            className="relative rounded-2xl overflow-hidden min-h-[280px] lg:min-h-0"
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
          >
            <video
              src={HERO_CARD_VIDEO_URL}
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p
              className="absolute bottom-5 left-5 text-base sm:text-lg font-medium"
              style={{ color: "#E1E0CC" }}
            >
              Your creative canvas.
            </p>
          </motion.div>

          <FeatureCard
            number="01"
            title="Project Storyboard."
            icon={ICONS.storyboard}
            index={1}
            items={[
              "Drag-and-drop scene sequencing",
              "Shared boards for collaborators",
              "Version history for every frame",
              "Export straight to your NLE",
            ]}
          />

          <FeatureCard
            number="02"
            title="Smart Critiques."
            icon={ICONS.critiques}
            index={2}
            items={[
              "AI-assisted footage analysis",
              "Threaded creative notes",
              "Integrations with your favorite tools",
            ]}
          />

          <FeatureCard
            number="03"
            title="Immersion Capsule."
            icon={ICONS.immersion}
            index={3}
            items={[
              "Notification silencing while you work",
              "Curated ambient soundscapes",
              "Schedule syncing across your team",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
