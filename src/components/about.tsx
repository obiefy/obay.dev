import Code from "@/components/code";

export default function About() {
  
  return (
    <div>
      <div className="flex mb-8 text-stone-600">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7 text-stone-600" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
          <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"></path>
        </svg>
        <Code className="ml-2 text-2xl font-medium" method="about"/>
      </div>
      <div>
        <p className="mb-4">I'm a passionate software developer with a knack for bringing ideas to life in the digital world. My coding journey started back in 2012 when I took on the challenge of creating a basic calculator using Pascal instructions during high school. That was just the beginning!</p>
        <p className="mb-4">I went on to earn my B.S. in Software Engineering, and ever since, my path as a software developer has been an exhilarating ride filled with exciting challenges and deeply rewarding experiences.</p>
        <p className="mb-4">Beyond coding, I'm all about exploring new places, meeting fascinating people, and immersing myself in different cultures. When I'm not diving into lines of code or jet-setting to new destinations, you'll likely find me out for a run or on the football field. These activities keep me grounded and ready for the next coding adventure.</p>
        <p className="mb-4">Thanks for stopping by my digital corner. Let's connect and team up to create something truly amazing! 😊🚀</p>
      </div>
</div>
  );
}