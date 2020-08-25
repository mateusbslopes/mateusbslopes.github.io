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
      <div>
        <title>
          <FormattedMessage id="jobExperience" />
        </title>
        <p>
          <JobExperienceDate value={new Date(2017, 0)} />
          -
          <JobExperienceDate value={new Date(2019, 8)} />- Teknisa Software
        </p>
        <p>
          <JobExperienceDate value={new Date(2019, 9)} />
          -
          <JobExperienceDate value={new Date(2019, 11)} />- DTI
        </p>
        <p>
          <JobExperienceDate value={new Date(2020, 0)} />
          -
          <JobExperienceDate value={new Date(2020, 3)} />- Maxmilhas
        </p>
        <p>
          <JobExperienceDate value={new Date(2020, 4)} />
          -
          <JobExperienceDate value={new Date(2020, 6)} />- Freelancer
          (Lavemcasa)
        </p>
        <p>
          <JobExperienceDate value={new Date(2020, 7)} />
          -
          <FormattedMessage id="now" />- DTI
        </p>
      </div>
      <div>
        <title>
          <FormattedMessage id="studyExperience" />
        </title>
        <p>
          <StudyExperienceDate value={new Date(2014, 0)} />
          -
          <StudyExperienceDate value={new Date(2016, 0)} />-
          <FormattedMessage id="itTechnician" /> CEFET-MG
        </p>
        <p>
          <StudyExperienceDate value={new Date(2018, 0)} />
          -
          <StudyExperienceDate value={new Date(2019, 0)} />-
          <FormattedMessage id="computingSystems" /> PUC Minas
        </p>
        <p>
          <StudyExperienceDate value={new Date(2020, 0)} />
          -
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
  <FormattedDate value={value} year="numeric" month="short" />
);

const StudyExperienceDate = ({ value }: any) => (
  <FormattedDate value={value} year="numeric" />
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
`;
