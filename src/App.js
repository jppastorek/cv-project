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
          // job: {
          //   title: "",
          //   company: "", is any of this necessary? Preview doesn't need to know these things, just show what's in jobs, right?
          //   from: "",
          //   to: "",
          // },
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
            firstValue={editor.personal.first}
            lastValue={editor.personal.last}
            titleValue={editor.personal.title}
            emailValue={editor.personal.email}
            telValue={editor.personal.tel}
            websiteValue={editor.personal.website}
            aboutValue={editor.personal.about}
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
