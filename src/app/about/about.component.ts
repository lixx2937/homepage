import { Component } from "@angular/core";
import { upworkRedirectComponent } from "../redirct/upwork-redirect.component";

@Component({
  selector: "about-component",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {

  public asATexts = [
    "As a developer, I have always enjoy designing and developing clean, efficient, and user friendly applicaitons/websites.",
    "As a co-worker, I find that one of the most enjoyable parts of my job is meeting and getting to know my fellow collegues.",
    "As a person, I seek to continually improve myself, to lift up those around me, and to always look forward to the future."
  ]
  public devSkills = [
    {
      type: "Frontend Development",
      skills: [
        "Angular / TypeScript / SCSS",
        "JavaScript",
        "HTML / CSS ",
        "Karma Testing",
        "Node.js",
        "SEO"
      ]
    }, {
      type: "Backend Development",
      skills: [
        "Java",
        "RestAPIs / JSON",
        "MongoDB",
        "Server-side Paging",
        "Junit / Jmockit",
        "Python"
      ]
    }, {
      type: "Pipeline / Testing",
      skills: [
        "Continuous Integration (CI)",
        "Jenkins",
        "Robot framework / Selenium",
        "End-to-end / Unit Testing",
        "Swagger",
        "JAMA"
      ]
    }, {
      type: "Other Skills/Tools",
      skills: [
        "Git/GitHub",
        "Scrum / Agile",
        "Atlassian / Jira",
        "Internationalization",
        "Mobile-Friendly",
        "VSCode"
      ]
    }
  ]

  public experiences = [
    {
      title: "Software Engineer",
      how: "at",
      company: "Best Buy",
      url: "https://www.bestbuy.com/",
      duration: "2021 - Present",
      points: [
        "Improve Best Buy development infrastructure",
        "Research and implement continous delivery",
        "Develop and maintain a wide variety of web components",
        "Code is deployed on to the main Best Buy website",
        "High focus on accessibility",
        "Perform coding interviews for candidates"
      ]
    },
    {
      title: "Software Engineer",
      how: "at",
      company: "Open Systems International",
      url: "https://www.osii.com/",
      duration: "2018 - 2021",
      points: [
        "Work as a full stack software engineer",
        "Follow Scrum and Agile Methodologies",
        "Design and create responsive frontend components",
        "Create and update restul APIs",
        "Optimize performance of applications",
        "Develop unit and end-to-end tests",
        "Implemented server-side paging",
        "Train new developers",
        "Activly review pull requests",
        "Maintain a continuos integration (CI) pipeline"
      ]
    }, {
      title: "Freelance Developer",
      how: "via",
      company: "Upwork",
      url: upworkRedirectComponent.upworkURL,
      duration: "2017 - 2018",
      points: [
        "Worked directly with business owners and entrepreneurs",
        "Designed and created website from scratch",
        "Used Wordpress for a more user friendly UI",
        "Updated search engine optimization (SEO)",
        "Setup DNS, AWS integrations, and email marketing"
      ]
    }, {
      title: "IT Field Technician (Tier 3)",
      how: "at",
      company: "University of Minnesota - CSE Department",
      url: "https://cse.umn.edu/cseit",
      duration: "2014 - 2017",
      points: [
        "Resolve hardware and software issues for the CS Department",
        "Managed multiple CSE computer labs",
        "Installed, deployed, and updated CS/CSE computers and servers",
        "Wrote technical documentation for installations",
        "Trained over a dozen new employees"
      ]
    }
  ]

  public educations = [
    {
      school: "University of Minnesota",
      url: "www.google.com",
      location: "Minneapolis, MN",
      timeFrame: "2013 - 2017",
      degree: "B.S. in Computer Science"
    }
  ]

  public languages = [
    {
      level: "Fluent",
      names: [
        "English",
        "Fuzhounese"
      ]
    }, {
      level: "Intermediate",
      names: [
        "Mandarin"
      ]
    }, {
      level: "Basic",
      names: [
        "Spanish"
      ]
    }
  ]

  public hobbies =[
    "Playing with a toddler",
    "Video Games",
    "Board Games",
    "Basketball"
  ]

  constructor() { }
}
