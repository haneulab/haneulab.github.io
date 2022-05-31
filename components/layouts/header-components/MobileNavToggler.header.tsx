import type { MobileNavTogglerComponentType } from '@components/app.interface';

const MobileNavToggler: MobileNavTogglerComponentType = ({
  className,
  onClickMobileToggle,
}) => {
  return (
    <nav className={className}>
      <section className="p-8">
        <div>
          <h3 className="font-bold text-4xl text-center mb-2">HaneuLab</h3>
          <p className="text-lg text-center font-medium">
            Make The World Better.
          </p>
        </div>
      </section>
      <button
        onClick={onClickMobileToggle}
        className="px-3 py-2 font-bold text-2xl fixed top-6 right-8 "
      >
        X
      </button>
    </nav>
  );
};

export default MobileNavToggler;
