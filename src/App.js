import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Preview from "./components/Preview";
import uniqid from "uniqid";

const App = () => {
  const [editor, setEditor] = useState({
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
  });

  const [preview, setPreview] = useState({
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
  });

  const onSubmitPersonal = (e) => {
    e.preventDefault();
    setPreview({
      personal: {
        ...editor.personal,
      },
      work: {
        ...preview.work,
      },
      education: {
        ...preview.education,
      },
    });
  };

  const onSubmitWork = (e) => {
    e.preventDefault();
    setEditor({
      personal: {
        ...editor.personal,
      },
      work: {
        jobs: editor.work.jobs.concat(editor.work.job),
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
        ...editor.education,
      },
    });
    setPreview({
      personal: {
        ...preview.personal,
      },
      work: {
        jobs: editor.work.jobs.concat(editor.work.job),
      },
      education: {
        ...preview.education,
      },
    });
  };

  const onSubmitEducation = (e) => {
    e.preventDefault();
    setEditor({
      personal: {
        ...editor.personal,
      },
      work: {
        ...editor.work,
      },
      education: {
        degrees: editor.education.degrees.concat(editor.education.degree),
        degree: {
          degree: "",
          school: "",
          subject: "",
          year: "",
          id: uniqid(),
        },
      },
    });
    setPreview({
      personal: {
        ...preview.personal,
      },
      work: {
        ...preview.work,
      },
      education: {
        degrees: editor.education.degrees.concat(editor.education.degree),
      },
    });
  };

  const handleChangePersonal = (e) => {
    switch (e.target.id) {
      case "firstName":
        setEditor({
          personal: {
            ...editor.personal,
            first: e.target.value,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
          },
        });

        break;
      case "lastName":
        setEditor({
          personal: {
            ...editor.personal,
            last: e.target.value,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
          },
        });
        break;
      case "title":
        setEditor({
          personal: {
            ...editor.personal,
            title: e.target.value,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
          },
        });
        break;
      case "email":
        setEditor({
          personal: {
            ...editor.personal,
            email: e.target.value,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
          },
        });
        break;
      case "tel":
        setEditor({
          personal: {
            ...editor.personal,
            tel: e.target.value,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
          },
        });
        break;
      case "site":
        setEditor({
          personal: {
            ...editor.personal,
            website: e.target.value,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
          },
        });
        break;
      case "about":
        setEditor({
          personal: {
            ...editor.personal,
            about: e.target.value,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
          },
        });
        break;
    }
  };

  const handleChangeWork = (e) => {
    switch (e.target.id) {
      case "jobTitle":
        setEditor({
          personal: {
            ...editor.personal,
          },
          work: {
            ...editor.work,
            job: {
              ...editor.work.job,
              title: e.target.value,
            },
          },
          education: {
            ...editor.education,
          },
        });
        break;
      case "company":
        setEditor({
          personal: {
            ...editor.personal,
          },
          work: {
            ...editor.work,
            job: {
              ...editor.work.job,
              company: e.target.value,
            },
          },
          education: {
            ...editor.education,
          },
        });
        break;
      case "from":
        setEditor({
          personal: {
            ...editor.personal,
          },
          work: {
            ...editor.work,
            job: {
              ...editor.work.job,
              from: e.target.value,
            },
          },
          education: {
            ...editor.education,
          },
        });
        break;
      case "to":
        setEditor({
          personal: {
            ...editor.personal,
          },
          work: {
            ...editor.work,
            job: {
              ...editor.work.job,
              to: e.target.value,
            },
          },
          education: {
            ...editor.education,
          },
        });
        break;
      case "description":
        setEditor({
          personal: {
            ...editor.personal,
          },
          work: {
            ...editor.work,
            job: {
              ...editor.work.job,
              description: e.target.value,
            },
          },
          education: {
            ...editor.education,
          },
        });
        break;
    }
  };

  const handleChangeEducation = (e) => {
    switch (e.target.id) {
      case "degree":
        setEditor({
          personal: {
            ...editor.personal,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
            degree: {
              ...editor.education.degree,
              degree: e.target.value,
            },
          },
        });
        break;
      case "school":
        setEditor({
          personal: {
            ...editor.personal,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
            degree: {
              ...editor.education.degree,
              school: e.target.value,
            },
          },
        });
        break;
      case "year":
        setEditor({
          personal: {
            ...editor.personal,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
            degree: {
              ...editor.education.degree,
              year: e.target.value,
            },
          },
        });
        break;
      case "subject":
        setEditor({
          personal: {
            ...editor.personal,
          },
          work: {
            ...editor.work,
          },
          education: {
            ...editor.education,
            degree: {
              ...editor.education.degree,
              subject: e.target.value,
            },
          },
        });
        break;
    }
  };

  return (
    <>
      <Header />
      <div className="container">
        <Form
          submitPersonal={onSubmitPersonal}
          submitEducation={onSubmitEducation}
          submitWork={onSubmitWork}
          handleChangePersonal={handleChangePersonal}
          handleChangeWork={handleChangeWork}
          handleChangeEducation={handleChangeEducation}
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
};

export default App;
