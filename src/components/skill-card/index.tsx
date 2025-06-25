import {
  FaPython,
  FaReact,
  FaGitAlt,
  FaNodeJs,
} from 'react-icons/fa';

import {
  SiDjango,
  SiJavascript,
  SiCss3,
  SiTensorflow,
  SiPytorch,
  SiOpencv,
  SiVisualstudiocode,
  SiJupyter,
  SiGooglecolab,
} from 'react-icons/si';

const skillList = [
  { name: 'Python', icon: <FaPython /> },
  { name: 'Django', icon: <SiDjango /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React.js', icon: <FaReact /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'Git', icon: <FaGitAlt /> },
  { name: 'CSS', icon: <SiCss3 /> },
  { name: 'TensorFlow', icon: <SiTensorflow /> },
  { name: 'PyTorch', icon: <SiPytorch /> },
  { name: 'OpenCV', icon: <SiOpencv /> },
  { name: 'Jupyter', icon: <SiJupyter /> },
  { name: 'VS Code', icon: <SiVisualstudiocode /> },
  { name: 'Google Colab', icon: <SiGooglecolab /> },
];

const SkillCard = ({ loading }: { loading: boolean }) => {
  const renderSkeleton = () => {
    return Array.from({ length: 12 }, (_, index) => (
      <div
        key={index}
        className="h-6 bg-base-200 animate-pulse rounded w-full"
      ></div>
    ));
  };

  return (
    <div className="card shadow-md bg-base-100 border border-base-300 rounded-box transition-all duration-300">
      <div className="card-body px-6 py-5">
        <h3 className="text-lg font-semibold text-base-content mb-3 border-b border-base-300 pb-2">
          Technical Proficiencies
        </h3>

        <div className="grid grid-cols-2 gap-3">
          {loading
            ? renderSkeleton()
            : skillList.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 bg-base-200 px-3 py-2 rounded-lg text-sm font-medium text-base-content shadow-sm hover:bg-base-300 transition-all"
                >
                  <span className="text-xl">{skill.icon}</span>
                  <span>{skill.name}</span>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
