import WithNoPic from "../components/WithNoPic";
import WithPic from './WithPic';
export default function Testimonials() {
  return (
    <section className="testimonialWrap">
      <h1>Testimonials</h1>
      <div>
        <WithNoPic />
        <WithPic />
      </div>
    </section>
  );
}
