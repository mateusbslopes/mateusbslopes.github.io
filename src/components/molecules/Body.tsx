/** @jsx jsx */
import { jsx, css } from "@emotion/core";
import { FormattedDate, FormattedMessage } from "react-intl";

export default function Body() {
  return (
    <div css={style}>
      <title>
        <FormattedMessage id="introduction" />
      </title>
      <p>
        <FormattedMessage id="introductionText" />
      </p>
      <title>
        <FormattedMessage id="jobExperience" />
      </title>
      <ol>
        <JobExperience
          startDate={new Date(2017, 0)}
          endDate={new Date(2019, 8)}
          companyName="Teknisa Software"
        />
        <JobExperience
          startDate={new Date(2019, 9)}
          endDate={new Date(2019, 11)}
          companyName="DTI"
        />
        <JobExperience
          startDate={new Date(2020, 0)}
          endDate={new Date(2020, 3)}
          companyName="Maxmilhas"
        />
        <JobExperience
          startDate={new Date(2020, 4)}
          endDate={new Date(2020, 6)}
          companyName="Freelancer (Lavemcasa)"
        />
        <JobExperience startDate={new Date(2020, 7)} companyName="DTI" />
      </ol>
      <div>
        <title>
          <FormattedMessage id="studyExperience" />
        </title>
        <p>
          <StudyExperienceDate value={new Date(2014, 0)} /> -{" "}
          <StudyExperienceDate value={new Date(2016, 0)} />-
          <FormattedMessage id="itTechnician" /> CEFET-MG
        </p>
        <p>
          <StudyExperienceDate value={new Date(2018, 0)} /> -{" "}
          <StudyExperienceDate value={new Date(2019, 0)} />-
          <FormattedMessage id="computingSystems" /> PUC Minas
        </p>
        <p>
          <StudyExperienceDate value={new Date(2020, 0)} /> -{" "}
          <FormattedMessage id="now" />-
          <FormattedMessage id="computingSystems" /> FUMEC
        </p>
      </div>
      <div>
        <title>
          <FormattedMessage id="contact" />
        </title>
        <div className="contacts">
          <div>
            <label id="email_label">Email:</label>
            <a
              aria-labelledby="email_label"
              href="mailto:mateusbslopes@gmail.com"
            >
              mateusbslopes@gmail.com
            </a>
          </div>
          <div>
            <label id="LinkedIn_label">LinkedIn:</label>
            <a
              aria-labelledby="LinkedIn_label"
              href="https://www.linkedin.com/in/mateus-lopes-23062915b/"
            >
              link
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const JobExperienceDate = ({ value }: any) => (
  <FormattedDate value={value} year="numeric" month="long" />
);

const StudyExperienceDate = ({ value }: any) => (
  <FormattedDate value={value} year="numeric" />
);

const JobExperience = ({ startDate, endDate, companyName }: any) => (
  <li>
    <p aria-hidden>
      <JobExperienceDate value={startDate} /> -{" "}
      {endDate ? (
        <JobExperienceDate value={endDate} />
      ) : (
        <FormattedMessage id="now" />
      )}{" "}
      - {companyName}
    </p>
    <p style={{ display: "none" }} aria-hidden="false">
      <FormattedMessage id="between" />
      <JobExperienceDate value={startDate} /> <FormattedMessage id="and" />
      {endDate ? (
        <JobExperienceDate value={endDate} />
      ) : (
        <FormattedMessage id="now" />
      )}
      <FormattedMessage id="at" />
      {companyName}
    </p>
  </li>
);

const style = ({ font, sizes }: any) => css`
  padding: ${sizes.margin[500]}px;
  max-width: 550px;
  margin: 0 auto;

  .contacts {
    display: flex;
    flex-direction: column;
    margin-block-start: 1em;

    label {
      margin-right: 4px;
    }
  }

  ol {
    padding-left: 0;
    li{
      list-style-type: none;
    }
  }
`;
