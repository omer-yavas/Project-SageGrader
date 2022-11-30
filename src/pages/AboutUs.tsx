import classes from './Aboutus.module.css';
import React from 'react';
const AboutUs: React.FC = () => {
  return (
    <div className={classes.aboutusbox}>
      <div className={classes.upperpart}>
        <h2>About us</h2>
        <p>
          As educators, we are mindful of the fact that it can be a challenging
          task to create a high quality assessment while providing rich and
          detailed personalised feedback. Grading is relatively simple when the
          student answer is 100% correct or 100% incorrect. What is not simple
          is to implement a fair and consistent grading scheme with meaningful
          feedback when the student answer is somewhere in between. This becomes
          an even more pressing matter for large cohorts.<br></br>
          <br></br>We believe that assessment grading does not need to be a
          struggle - regardless of a few dozen students or a few thousands. With
          advanced AI technology and the convenience of Jupyter notebooks, we
          designed and developed SageGrader to free up your capacity as an
          educator by automating the entire grading process without compromising
          the quality of feedback so that you can focus on what matters most:
          creating a better learning experience for your students.
        </p>
      </div>
      <div className={classes.personalcards}>
        <div className={classes.card}>
          <img
            src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567bc626328906466c4100_Founder.png"
            loading="lazy"
            srcSet="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567bc626328906466c4100_Founder-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567bc626328906466c4100_Founder-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567bc626328906466c4100_Founder-p-1080.png 1080w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567bc626328906466c4100_Founder.png 1196w"
            sizes="(max-width: 991px) 190px, 270px"
            alt=""
          />
          <div className={classes.personandtitle}>Dr. David Akman</div>
          <div className={classes.personandtitle}>Co-founder</div>
          <div>
            <a href="https://www.linkedin.com/in/dr-david-akman/">
              <img
                src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567be7ee9bd3eb8253fba4_LinkedIn.png"
                loading="lazy"
                width="60"
                srcSet="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567be7ee9bd3eb8253fba4_LinkedIn-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567be7ee9bd3eb8253fba4_LinkedIn.png 605w"
                sizes="60px"
                alt=""
              />
            </a>
          </div>
          <p>
            <br></br>
            Dr. David Akman has a Ph.D. in applied mathematics & statistics from
            The Johns Hopkins University (USA), M.Sc. in operations research &
            industrial engineering from North Carolina State University (USA)
            and B.Sc. in mathematics (Honours). His master’s thesis was on
            genetic algorithms in combinatorial optimisation and his doctoral
            thesis was on graph theory applications in reinforcement learning
            and Markov decision processes. He has more than two decades of
            industrial, consulting, teaching, and research expertise across all
            areas of data science & analytics, particularly in artificial
            intelligence, machine learning, reinforcement learning, forecasting,
            and mathematical modelling & optimisation. He has wide-ranging
            professional work experience in large-scale software design &
            development using various technologies and programming languages
            including AWS, Python, R, Java, and C/C++.<br></br>
            <br></br> Dr. Akman taught postgraduate machine learning & data
            analytics courses at Johns Hopkins University in the U.S. as well as
            at Royal Melbourne Institute of Technology (RMIT) University in
            Australia. He taught large cohorts (300/400+ students) from
            extremely diverse backgrounds on a regular basis. <br></br>
            <br></br>Dr. Akman's unique background in large-scale commercial
            software development, artificial intelligence, and cloud technology
            combined with his extensive teaching experience has been
            instrumental is design and development of SageGrader.<br></br>
          </p>
        </div>
        <div className={classes.card}>
          <img
            src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567bc626328906466c4100_Founder.png"
            loading="lazy"
            srcSet="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567bc626328906466c4100_Founder-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567bc626328906466c4100_Founder-p-800.png 800w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567bc626328906466c4100_Founder-p-1080.png 1080w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567bc626328906466c4100_Founder.png 1196w"
            sizes="(max-width: 991px) 190px, 270px"
            alt=""
          />
          <div className={classes.personandtitle}>Simon Pamuk</div>
          <div className={classes.personandtitle}>Co-founder</div>
          <div>
            <a href="https://www.linkedin.com/in/simon-pamuk">
              <img
                src="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567be7ee9bd3eb8253fba4_LinkedIn.png"
                loading="lazy"
                width="60"
                srcSet="https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567be7ee9bd3eb8253fba4_LinkedIn-p-500.png 500w, https://uploads-ssl.webflow.com/63207aa6a0b066c193c93a03/63567be7ee9bd3eb8253fba4_LinkedIn.png 605w"
                sizes="60px"
                alt=""
              />
            </a>
          </div>
          <p>
            <br></br>
            Simon is a well-established technology educator with a successful
            track record of innovative teaching throughout his entire career.
            Simon worked at a wide range of schools, from grammar schools in UK
            to independent schools in Melbourne, Victoria. After completing his
            Master of Education at Westminster University and a series of
            courses in data science at Clarusway and IBM, he created a brand-new
            approach in secondary school IT education in Australia and designed
            a series of courses for an innovative IT curriculum which helps
            students learn enough to be regarded as “Junior Data Scientists”
            upon completion of high school. His passion, vision, and pioneering
            ideas in technology and data science education in general crossed
            his path with Dr. David, who advised him throughout his amazing
            journey for a new cloud-based auto-marking platform called
            SageGrader.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
