import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  ShieldCheck,
  FileText,
  HandCoins,
  BadgeCheck,
  ClipboardList,
  Headset,
} from "lucide-react";

export default function Home() {
  const features = [
    {
      title: "Registro de Pagos",
      description:
        "Maneja los pagos de tus clientes de forma rápida y sencilla.",
      icon: <ShieldCheck className="w-16 h-16" strokeWidth={1.5} />,
      color: "text-primary",
    },
    {
      title: "Gestión de Documentos",
      description:
        "Administra y libera documentos de clientes de forma eficiente.",
      icon: <FileText className="w-16 h-16" strokeWidth={1.5} />,
      color: "text-[#00c5cd]",
    },
    {
      title: "Soporte mas completo",
      description:
        "Nuestro equipo está disponible para ayudarte en cualquier momento.",
      icon: <Headset className="w-16 h-16" strokeWidth={1.5} />,
      color: "text-[#a1d640]",
    },
  ];

  return (
    <main>
      <section className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-secondary to-muted py-12 px-4">
        <div className="w-full max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-4 text-foreground text-center">
            Bienvenido a la Herramienta Pagos y Liberación de Documentos de
            MeruQ
          </h1>
          <p className="text-lg text-accent-foreground mb-12 text-center max-w-xl mx-auto">
            Gestiona pagos de clientes y manejo de documentos de manera
            sencilla, rápida y segura.
          </p>

          <div className="relative">
            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {features.map((feature, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-4 basis-4/5 md:basis-2/3 lg:basis-1/2"
                  >
                    <div
                      className={`
                      p-8 h-full flex flex-col items-center bg-card text-card-foreground 
                      rounded-xl shadow-lg border transition-all mx-1
                      ${
                        index === 1
                          ? "border-primary/30 hover:border-primary/60 scale-105 z-10"
                          : "border-border/20 hover:border-border/40 scale-100 opacity-90"
                      }
                    `}
                    >
                      <div
                        className={`
                        w-32 h-32 mb-6 flex items-center justify-center rounded-full
                        ${
                          index === 1
                            ? "bg-primary/10 dark:bg-primary/20"
                            : "bg-muted"
                        }
                      `}
                      >
                        <div className={feature.color}>{feature.icon}</div>
                      </div>
                      <h2 className="text-2xl font-semibold mb-4 text-primary">
                        {feature.title}
                      </h2>
                      <p className="text-base text-accent-foreground text-center">
                        {feature.description}
                      </p>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>

              <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-primary hover:bg-primary/90 text-primary-foreground border-none size-12 shadow-lg z-20" />
              <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-accent hover:bg-accent/90 text-accent-foreground border-none size-12 shadow-lg z-20" />
            </Carousel>
          </div>
        </div>
      </section>
    </main>
  );
}
