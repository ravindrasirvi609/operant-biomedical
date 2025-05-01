import Count from "react-countup";
import { useInView } from "react-intersection-observer";

interface FunFactHomeOneProps {
  style_3?: boolean;
}

const FunFactHomeOne = ({ style_3 }: FunFactHomeOneProps) => {
  const [ref, inView] = useInView({
    threshold: 0,
    triggerOnce: true,
  });

  const funfactData = [
    {
      id: 1,
      number: 150,
      title: "Research Projects",
      icon: "flaticon-research",
    },
    {
      id: 2,
      number: 50,
      title: "Expert Researchers",
      icon: "flaticon-researcher",
    },
    {
      id: 3,
      number: 100,
      title: "Publications",
      icon: "flaticon-publication",
    },
    {
      id: 4,
      number: 25,
      title: "Awards Won",
      icon: "flaticon-award",
    },
  ];

  return (
    <>
      {!style_3 && <div className="h-24 md:h-16"></div>}
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {funfactData.map((item, i) => (
            <div key={i} className="text-center">
              <div className="glass-dark p-6 rounded-xl">
                <div
                  ref={ref}
                  className={`text-4xl font-bold text-primary-400 mb-4 ${
                    inView ? "animate-fade-in" : "opacity-0"
                  }`}
                >
                  <Count
                    end={item.number}
                    duration={2.5}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                  +
                </div>
                <div
                  className={`text-white/90 text-lg font-medium ${
                    inView ? "animate-fade-in" : "opacity-0"
                  }`}
                >
                  {item.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {!style_3 && <div className="h-24 md:h-16"></div>}
    </>
  );
};

export default FunFactHomeOne;
