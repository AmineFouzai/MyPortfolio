import { DarkTheme, LightTheme, ThemeProvider } from "baseui";
import { Accordion, Panel } from "baseui/accordion";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import "./ExperienceAccordion.css";

function ExperienceAccordion(props: { theme: any; sections: any[]; }) {
  const theme = props.theme;

  return (
    <div className="experience-accord">
      <ThemeProvider theme={theme.name === "light" ? LightTheme : DarkTheme}>
        <Accordion onChange={({ expanded }) => console.log(expanded)} initialState={{ expanded: [...props.sections.map((section) => { return section['title'] })] }}>
          {props.sections.map((section) => {
            return (
              <Panel
                title={section["title"]}
                key={section["title"]}
              >
                {section["experiences"].map((experience: any) => {
                  return (
                    <ExperienceCard experience={experience} theme={theme} />
                  );
                })}
              </Panel>
            );
          })}
        </Accordion>
      </ThemeProvider>
    </div>
  );
}

export default ExperienceAccordion;
