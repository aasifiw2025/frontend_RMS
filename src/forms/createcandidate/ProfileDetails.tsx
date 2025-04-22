import { useState } from "react";
import DropDownMenu from "../../components/ui/Dropdown";
import Input from "../../components/ui/Input";
import { FaPlus } from "react-icons/fa";
import Textarea from "../../components/ui/TextArea";
import Button from "../../components/ui/Button";

const ProfileDetails = () => {
  const [profileDetails, setProfileDetails] = useState({
    profession: "",
    jobRole: "",
    gender: "",
    dob: "",
    skills: "",
    experience: "",
    education: "",
    website: "",
    maritalStatus: "",
    languages: "",
    bio: "",
  });
  return (
    <>
      <section className="grid  grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div className="w-full space-y-4">
          <DropDownMenu
            value={profileDetails.profession}
            onChange={(e) =>
              setProfileDetails({
                ...profileDetails,
                profession: e.target.value,
              })
            }
            label="Profession"
            id="profession"
            options={[
              { value: "software_engineer", label: "Software Engineer" },
              { value: "doctor", label: "Doctor" },
              { value: "teacher", label: "Teacher" },
              { value: "lawyer", label: "Lawyer" },
              { value: "accountant", label: "Accountant" },
              { value: "nurse", label: "Nurse" },
              { value: "architect", label: "Architect" },
              { value: "civil_engineer", label: "Civil Engineer" },
              { value: "mechanic", label: "Mechanic" },
              { value: "pharmacist", label: "Pharmacist" },
              { value: "chef", label: "Chef" },
              { value: "pilot", label: "Pilot" },
              { value: "police_officer", label: "Police Officer" },
              { value: "firefighter", label: "Firefighter" },
              { value: "data_analyst", label: "Data Analyst" },
              { value: "graphic_designer", label: "Graphic Designer" },
              { value: "web_developer", label: "Web Developer" },
              { value: "electrician", label: "Electrician" },
              { value: "plumber", label: "Plumber" },
              { value: "dentist", label: "Dentist" },
            ]}
            classname="w-full h-[45px]"
          />

          <DropDownMenu
            value={profileDetails.jobRole}
            onChange={(e) =>
              setProfileDetails({ ...profileDetails, jobRole: e.target.value })
            }
            label="Job Role"
            id="role"
            options={[
              { value: "intern", label: "Intern" },
              { value: "junior_developer", label: "Junior Developer" },
              { value: "software_engineer", label: "Software Engineer" },
              {
                value: "senior_software_engineer",
                label: "Senior Software Engineer",
              },
              { value: "team_lead", label: "Team Lead" },
              { value: "project_manager", label: "Project Manager" },
              { value: "product_manager", label: "Product Manager" },
              { value: "tech_lead", label: "Tech Lead" },
              { value: "engineering_manager", label: "Engineering Manager" },
              { value: "qa_engineer", label: "QA Engineer" },
              { value: "business_analyst", label: "Business Analyst" },
              { value: "scrum_master", label: "Scrum Master" },
              { value: "cto", label: "CTO" },
              { value: "cfo", label: "CFO" },
              { value: "ceo", label: "CEO" },
              { value: "hr_manager", label: "HR Manager" },
              { value: "marketing_manager", label: "Marketing Manager" },
              { value: "ui_ux_designer", label: "UI/UX Designer" },
              { value: "devops_engineer", label: "DevOps Engineer" },
              { value: "data_scientist", label: "Data Scientist" },
            ]}
            classname="w-full h-[45px]"
          />
          <DropDownMenu
            value={profileDetails.gender}
            onChange={(e) =>
              setProfileDetails({ ...profileDetails, gender: e.target.value })
            }
            label="Gender"
            id="gender"
            options={[
              { value: "male", label: "Male" },
              { value: "female", label: "Female" },
              { value: "non_binary", label: "Non-binary" },
              { value: "transgender", label: "Transgender" },
              { value: "genderqueer", label: "Genderqueer" },
              { value: "genderfluid", label: "Genderfluid" },
              { value: "agender", label: "Agender" },
              { value: "two_spirit", label: "Two-Spirit" },
              { value: "prefer_not_to_say", label: "Prefer Not to Say" },
              { value: "other", label: "Other" },
            ]}
            classname="w-full h-[45px]"
          />

          <Input
            value={profileDetails.dob}
            onChange={(e) =>
              setProfileDetails({ ...profileDetails, dob: e.target.value })
            }
            label="Dob"
            id="dob"
            type="date"
            classname="w-full h-[45px]"
          />
          <div className="flex flex-row items-center gap-4">
            <div className="w-full">
              <Input
                value={profileDetails.skills}
                onChange={(e) =>
                  setProfileDetails({
                    ...profileDetails,
                    skills: e.target.value,
                  })
                }
                id="skills"
                classname="w-full h-[45px]"
                placeholder="Skills"
                type="text"
                label="Skills"
              />
            </div>
            <button className="object-contain mt-3 rounded-[10px] p-4 bg-[var(--bg-primary)] flex justify-center items-center">
              <FaPlus color="#fff" size={15} />
            </button>
          </div>
        </div>
        <div className="w-full space-y-4">
          <DropDownMenu
            value={profileDetails.experience}
            onChange={(e) =>
              setProfileDetails({
                ...profileDetails,
                experience: e.target.value,
              })
            }
            label="Experience"
            id="experience"
            options={[
              { value: "fresher", label: "Fresher" },
              { value: "internship", label: "Internship" },
              { value: "entry_level", label: "Entry Level (0-1 years)" },
              { value: "junior_level", label: "Junior Level (1-3 years)" },
              { value: "mid_level", label: "Mid Level (3-5 years)" },
              { value: "senior_level", label: "Senior Level (5-8 years)" },
              { value: "lead_level", label: "Lead Level (8-10 years)" },
              { value: "managerial", label: "Managerial (10+ years)" },
              { value: "executive", label: "Executive / Director" },
              { value: "consultant", label: "Consultant / Expert" },
            ]}
            classname="w-full h-[45px]"
          />
          <DropDownMenu
            value={profileDetails.education}
            onChange={(e) =>
              setProfileDetails({
                ...profileDetails,
                education: e.target.value,
              })
            }
            label="Education"
            id="education"
            options={[
              { value: "high_school", label: "High School / Secondary" },
              { value: "diploma", label: "Diploma" },
              { value: "associate_degree", label: "Associate Degree" },
              { value: "bachelors", label: "Bachelor's Degree" },
              { value: "masters", label: "Master's Degree" },
              { value: "mba", label: "MBA" },
              { value: "phd", label: "PhD / Doctorate" },
              { value: "post_doctorate", label: "Post Doctorate" },
              {
                value: "professional_certificate",
                label: "Professional Certificate",
              },
              { value: "other", label: "Other" },
            ]}
            classname="w-full h-[45px]"
          />
          <Input
            value={profileDetails.website}
            onChange={(e) =>
              setProfileDetails({ ...profileDetails, website: e.target.value })
            }
            label="Website"
            id="website"
            type="url"
            classname="w-full h-[45px]"
            placeholder="https://www.example.com"
          />
          <DropDownMenu
            value={profileDetails.maritalStatus}
            onChange={(e) =>
              setProfileDetails({
                ...profileDetails,
                maritalStatus: e.target.value,
              })
            }
            label="Marital Status"
            id="maritalStatus"
            options={[
              { value: "single", label: "Single" },
              { value: "married", label: "Married" },
              { value: "divorced", label: "Divorced" },
              { value: "widowed", label: "Widowed" },
              { value: "separated", label: "Separated" },
              { value: "in_relationship", label: "In a Relationship" },
              { value: "prefer_not_to_say", label: "Prefer Not to Say" },
            ]}
            classname="w-full h-[45px]"
          />
          <div className="flex flex-row items-center gap-4">
            <div className="w-full">
              <Input
                value={profileDetails.languages}
                onChange={(e) =>
                  setProfileDetails({
                    ...profileDetails,
                    languages: e.target.value,
                  })
                }
                id="languages"
                classname="w-full h-[45px]"
                placeholder="langauges"
                type="text"
                label="Languages"
              />
            </div>
            <button className="object-contain mt-3 rounded-[10px] p-4 bg-[var(--bg-primary)] flex justify-center items-center">
              <FaPlus color="#fff" size={15} />
            </button>
          </div>
        </div>
      </section>
      <div className="w-full mt-4">
        <Textarea
          label="Bio"
          classname="w-full min-h-[235px]"
          id="bio"
          value={profileDetails?.bio}
          onChange={(e) =>
            setProfileDetails({ ...profileDetails, bio: e.target.value })
          }
        />
      </div>
      <div className="flex justify-center items-center mt-4">
        <Button
          className="h-[35px] w-[120px] bg-[var(--bg-primary)]"
          onClick={() => {}}
          hasIcon
          icon={<FaPlus />}
          title="Create"
        />
      </div>
    </>
  );
};

export default ProfileDetails;
