import Image from "next/image";
import Hero from "../components/sections/Hero";
import Section from "../components/ui/Section";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";

export default function Home() {
  return (
    <>
      <Hero />

      <Section
        title="Áreas de Atuação"
        subtitle="Soluções jurídicas especializadas para suas necessidades"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card>
            <h3 className="text-xl font-bold mb-4">Direito Civil</h3>
            <p className="text-gray-600 mb-4">
              Contratos, responsabilidade civil, direito de família e sucessões.
            </p>
            <Button variant="outline" size="sm">
              Saiba mais
            </Button>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-4">Direito Civil</h3>
            <p className="text-gray-600 mb-4">
              Contratos, responsabilidade civil, direito de família e sucessões.
            </p>
            <Button variant="outline" size="sm">
              Saiba mais
            </Button>
          </Card>
          <Card>
            <h3 className="text-xl font-bold mb-4">Direito Civil</h3>
            <p className="text-gray-600 mb-4">
              Contratos, responsabilidade civil, direito de família e sucessões.
            </p>
            <Button variant="outline" size="sm">
              Saiba mais
            </Button>
          </Card>
          {/* Mais cards... */}
        </div>
      </Section>
    </>
  );
}
