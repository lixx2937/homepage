import { Component } from "@angular/core";

@Component({
  selector: "about-component",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.scss"]
})
export class AboutComponent {

  public devSkills = [
    {
      type: "Frontend Development",
      skills: [
        "JavaScript, CSS, HTML",
        "SCSS",
        "Angular",
        "TypeScript",
        "Node.js"
      ]
    }, {
      type: "Backend Development",
      skills: [
        "Java",
        "Swagger",
        "RestAPI",
        "MongoDB",
        "PHP",
        "MySQL"
      ]
    }, {
      type: "Pipeline / Testing",
      skills: [
        "Jenkins",
        "Robot framework",
        "Selenium",
        "Karma",
        "Junit / Jmockit"
      ]
    }, {
      type: "Other Tools",
      skills: [
        "GitHub",
        "Scrum / Agile",
        "Wordpress",
        "SEO",
        "Adobe Illustrator",
        "Unix, Windows, Mac"
      ]
    }
  ]

  public experiences = [
    {
      title: "Software Developer",
      how: "at",
      company: "Open Systems International",
      url: "www.google.com",
      duration: "2018 - Present",
      points: [
        "Work as a full stack software developer",
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
      url: "www.google.com",
      duration: "2017 - 2018",
      points: [
        "Worked directly with business owners and entrepreneurs",
        "Designed and created website from scratch",
        "Used Wordpress for a more user friendly UI",
        "Updated search engine optimization (SEO)",
        "Setup DNS, AWS integrations, and email marketing"
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
    "Playing with baby",
    "Video Games",
    "Board Games",
    "Basketball"
  ]

  constructor() { }
}
