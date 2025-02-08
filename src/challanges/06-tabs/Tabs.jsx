import { useEffect, useState } from "react";
import ContainerPage from "../../components/ContainerPage";
import TitlePage from "../../components/TitlePage";
import Loading from "../../components/Loading";
import SideName from "./SideName";
import Experince from "./Experince";

const url = "https://course-api.com/react-tabs-project";

export default function Tabs() {
  const [jobs, setJobs] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setJobs(data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  if (isLoading) return <Loading />;

  if (jobs.length === 0) return <p>No jobs available.</p>;

  return (
    <ContainerPage>
      <TitlePage title="experience" />
      <div className="grid grid-cols-[200px_1fr] w-[90vm] gap-5 p-16">
        <div className="flex flex-col gap-4">
          {jobs.map((job, index) => (
            <SideName
              key={job.id}
              name={job.company}
              onClick={() => setActiveIndex(index)}
              isActive={activeIndex === index}
            />
          ))}
        </div>

        <Experince job={jobs[activeIndex]} />
      </div>
    </ContainerPage>
  );
}
