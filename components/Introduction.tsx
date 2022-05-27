import Box from 'customs/Box';
import BoxWrap from 'customs/BoxWrap';

const Introduction: React.FC = () => {
  return (
    <Box
      className="bg-transparent"
      wrapper={
        <BoxWrap
          className="px-8 py-20"
          element={
            <div>
              <div>
                <h2 className="font-medium text-2xl text-center">
                  Hi, I&apos;m Haneul Choi.
                </h2>

                <p className="font-light text-4xl text-center">
                  I am a software developer.
                </p>
                <div className="mt-8 flex items-center justify-center">
                  <button className="px-3 py-2 border-b-2 text-xl border-slate-900/40 border-double animate-pulse">
                    <span className="font-bold">I Build ...</span>
                  </button>
                </div>
              </div>
              <div></div>
            </div>
          }
        />
      }
    />
  );
};

export default Introduction;
