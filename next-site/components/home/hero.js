import Animation from "./animation";

export default function Hero() {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          넥스트로 만든 블로그입니다
        </h1>
        <p className="mb-8 leading-relaxed">
          국가는 농지에 관하여 경자유전의 원칙이 달성될 수 있도록 노력하여야
          하며, 농지의 소작제도는 금지된다. 정당은 그 목적·조직과 활동이
          민주적이어야 하며, 국민의 정치적 의사형성에 참여하는데 필요한 조직을
          가져야 한다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            프로젝트 보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}
