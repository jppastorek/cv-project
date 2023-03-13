import "./App.css";
import React, { Component } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Preview from "./components/Preview";
import uniqid from "uniqid";

class App extends Component {
  constructor() {
    super();

    this.state = {
      editor: {
        personal: {
          first: "",
          last: "",
          title: "",
          email: "",
          tel: "",
          website: "",
          about: "",
        },
        work: {
          job: {
            title: "",
            company: "",
            from: "",
            to: "",
            description: "",
            id: uniqid(),
          },
          jobs: [],
        },
        education: {
          degree: {
            degree: "",
            school: "",
            subject: "",
            year: "",
            id: uniqid(),
          },
          degrees: [],
        },
      },
      preview: {
        personal: {
          first: "",
          last: "",
          title: "",
          email: "",
          tel: "",
          website: "",
          about: "",
        },
        work: {
          jobs: [],
        },
        education: {
          degrees: [],
        },
      },
    };
  }

  onSubmitPersonal = (e) => {
    e.preventDefault();
    this.setState({
      preview: {
        personal: {
          ...this.state.editor.personal,
        },
        work: {
          ...this.state.preview.work,
        },
        education: {
          ...this.state.preview.education,
        },
      },
    });
  };

  onSubmitEducation = (e) => {
    e.preventDefault();
    this.setState({
      editor: {
        personal: {
          ...this.state.editor.personal,
        },
        work: {
          ...this.state.editor.work,
        },
        education: {
          degrees: this.state.editor.education.degrees.concat(
            this.state.editor.education.degree
          ),
          degree: {
            degree: "",
            school: "",
            subject: "",
            year: "",
            id: uniqid(),
          },
        },
      },
      preview: {
        personal: {
          ...this.state.preview.personal,
        },
        work: {
          ...this.state.preview.work,
        },
        education: {
          degrees: this.state.editor.education.degrees.concat(
            this.state.editor.education.degree
          ),
        },
      },
    });
  };

  onSubmitWork = (e) => {
    e.preventDefault();
    this.setState({
      editor: {
        personal: {
          ...this.state.editor.personal,
        },
        work: {
          jobs: this.state.editor.work.jobs.concat(this.state.editor.work.job),
          job: {
            title: "",
            company: "",
            from: "",
            to: "",
            description: "",
            id: uniqid(),
          },
        },
        education: {
          ...this.state.editor.education,
        },
      },
      preview: {
        personal: {
          ...this.state.preview.personal,
        },
        work: {
          jobs: this.state.editor.work.jobs.concat(this.state.editor.work.job),
        },
        education: {
          ...this.state.preview.education,
        },
      },
    });
  };

  handleChangePersonal = (e) => {
    switch (e.target.id) {
      case "firstName":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
              first: e.target.value,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
      case "lastName":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
              last: e.target.value,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
      case "title":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
              title: e.target.value,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
      case "email":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
              email: e.target.value,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
      case "tel":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
              tel: e.target.value,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
      case "site":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
              website: e.target.value,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
      case "about":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
              about: e.target.value,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
    }
  };

  handleChangeWork = (e) => {
    switch (e.target.id) {
      case "jobTitle":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
            },
            work: {
              ...this.state.editor.work,
              job: {
                ...this.state.editor.work.job,
                title: e.target.value,
              },
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
      case "company":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
            },
            work: {
              ...this.state.editor.work,
              job: {
                ...this.state.editor.work.job,
                company: e.target.value,
              },
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
      case "from":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
            },
            work: {
              ...this.state.editor.work,
              job: {
                ...this.state.editor.work.job,
                from: e.target.value,
              },
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
      case "to":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
            },
            work: {
              ...this.state.editor.work,
              job: {
                ...this.state.editor.work.job,
                to: e.target.value,
              },
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
      case "description":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
            },
            work: {
              ...this.state.editor.work,
              job: {
                ...this.state.editor.work.job,
                description: e.target.value,
              },
            },
            education: {
              ...this.state.editor.education,
            },
          },
        });
        break;
    }
  };

  handleChangeEducation = (e) => {
    switch (e.target.id) {
      case "degree":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
              degree: {
                ...this.state.editor.education.degree,
                degree: e.target.value,
              },
            },
          },
        });
        break;
      case "school":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
              degree: {
                ...this.state.editor.education.degree,
                school: e.target.value,
              },
            },
          },
        });
        break;
      case "year":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
              degree: {
                ...this.state.editor.education.degree,
                year: e.target.value,
              },
            },
          },
        });
        break;
      case "subject":
        this.setState({
          editor: {
            personal: {
              ...this.state.editor.personal,
            },
            work: {
              ...this.state.editor.work,
            },
            education: {
              ...this.state.editor.education,
              degree: {
                ...this.state.editor.education.degree,
                subject: e.target.value,
              },
            },
          },
        });
        break;
    }
  }

  render() {
    const { editor, preview } = this.state;
    return (
      <>
        <Header />
        <div className="container">
          <Form
            submitPersonal={this.onSubmitPersonal}
            submitEducation={this.onSubmitEducation}
            submitWork={this.onSubmitWork}
            handleChangePersonal={this.handleChangePersonal}
            handleChangeWork={this.handleChangeWork}
            handleChangeEducation={this.handleChangeEducation}
            firstValue={editor.personal.first}
            lastValue={editor.personal.last}
            titleValue={editor.personal.title}
            emailValue={editor.personal.email}
            telValue={editor.personal.tel}
            websiteValue={editor.personal.website}
            aboutValue={editor.personal.about}
            jobTitleValue={editor.work.job.title}
            companyValue={editor.work.job.company}
            fromValue={editor.work.job.from}
            toValue={editor.work.job.to}
            descriptionValue={editor.work.job.description}
            degreeValue={editor.education.degree.degree}
            schoolValue={editor.education.degree.school}
            subjectValue={editor.education.degree.subject}
            yearValue={editor.education.degree.year}
          />
          <Preview
            first={preview.personal.first}
            last={preview.personal.last}
            title={preview.personal.title}
            email={preview.personal.email}
            tel={preview.personal.tel}
            website={preview.personal.website}
            about={preview.personal.about}
            jobs={preview.work.jobs}
            degrees={preview.education.degrees}
          />
        </div>
      </>
    );
  }
}

export default App;
