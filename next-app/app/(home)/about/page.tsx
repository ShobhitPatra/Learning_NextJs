import Navbar from "@/app/components/Navbar";

const About = () => {
  const content = getAboutContent();
  return (
    <div className="bg-slate-950 h-screen p-16">
      <span className="text-slate-50 text-center text-xl  ">{content}</span>
    </div>
  );
};
export default About;

const getAboutContent = () => {
  const text = `Lorem ipsum adipisci eius, autem quisquam. Cupiditate tenetur beatae sint nostrum
   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat quos est
  adipisci eius, autem quisquam. Cupiditate tenetur beatae sint nostrum
  animi voluptas nihil excepturi numquam ab provident, minima consectetur
  laudantium amet mollitia voluptates hic quaerat qui nisi facilis
  voluptatem consequuntur alias iusto cumque dicta. Repellendus tenetur, eum
  impedit quis quia ipsam amet! Perspiciatis nihil laudantium error
  repellendus harum, ea vero nesciunt dolorum. Nisi asperiores, error
  tenetur illum dolore magnam facere nobis odit quaerat veritatis delectus
  quidem nihil placeat dolorem quos qui at laborum itaque totam quia
  architecto, molestiae commodi cumque. Ab asperiores quo vitae, eius fugiat
  maxime autem eum dolores in unde recusandae, quas inventore esse ipsa a
  laudantium incidunt eos excepturi perferendis itaque dolorum vero hic.
  Harum officiis dolorum qui modi vel nulla quae repellendus quasi repellat
  est reiciendis culpa velit recusandae cupiditate earum, accusamus unde.
  Dolorem, omnis odit.`;

  return text;
};
