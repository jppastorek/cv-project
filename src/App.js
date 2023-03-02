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

  handleChangeFirst = (e) => {
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
  };

  handleChangeLast = (e) => {
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
  };

  handleChangeTitle = (e) => {
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
  };

  handleChangeEmail = (e) => {
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
  };

  handleChangeTel = (e) => {
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
  };

  handleChangeWebsite = (e) => {
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
  };

  handleChangeAbout = (e) => {
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
  };

  handleChangeJobTitle = (e) => {
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
  };

  handleChangeCompany = (e) => {
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
  };

  handleChangeFrom = (e) => {
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
  };

  handleChangeTo = (e) => {
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
  };

  handleChangeDescription = (e) => {
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
  };

  //is there a way I can do just one single handleChange and pass values to grab which input it is inside of, which will then change the corresponding property of state?
  //man that would be so cool and DRY

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
            handleChangeFirst={this.handleChangeFirst}
            handleChangeLast={this.handleChangeLast}
            handleChangeTitle={this.handleChangeTitle}
            handleChangeEmail={this.handleChangeEmail}
            handleChangeTel={this.handleChangeTel}
            handleChangeWebsite={this.handleChangeWebsite}
            handleChangeAbout={this.handleChangeAbout}
            handleChangeJobTitle={this.handleChangeJobTitle}
            handleChangeCompany={this.handleChangeCompany}
            handleChangeFrom={this.handleChangeFrom}
            handleChangeTo={this.handleChangeTo}
            handleChangeDescription={this.handleChangeDescription}
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
          />
          <Preview
            first={preview.personal.first}
            last={preview.personal.last}
            title={preview.personal.title}
            email={preview.personal.email}
            tel={preview.personal.tel}
            website={preview.personal.website}
            about={preview.personal.about}
          />
        </div>
      </>
    );
  }
}

export default App;
