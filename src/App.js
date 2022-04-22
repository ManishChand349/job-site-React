import Header from "./components/Header";
import SectionCategory from "./components/SectionCategory";
import SectionDownlond from "./components/SectionDownlond";
import SectionFooter from "./components/SectionFooter";
import SectionJobs from "./components/SectionJobs";
import SectionService from "./components/SectionService";
import SectionStaff from "./components/SectionStaff";
import SubscribeSection from "./components/SubscribeSection";

function App() {
  return (
    <div className="App">
      <Header />
      <SectionCategory />
      <SectionJobs />
      <SectionService/>
      <SectionDownlond />
      <SectionStaff/>
      <SubscribeSection/>
      <SectionFooter/>
    </div>
  );
}

export default App;
