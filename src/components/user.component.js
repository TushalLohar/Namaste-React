/*
 * FILE: user.component.js
 * ROLE: Small presentational card showing name, location, and static contact. Used only on the About
 *       page (About.componenet.js) to demo a functional component next to UserClass. Receives
 *       name and location as props. Solves: demo of props in a function component; count/count2
 *       are static arrays here (not state), so they never change on interaction.
 */

const User = ({ name, location }) => {
  const count = [0, 1, 2, 3, 4];
  const count2 = [4, 3, 2, 1, 0];

  return (
    <div className="p-2.5 border border-gray-800 rounded-lg mb-4">
      <h1 className="text-lg font-semibold">
        Count 1 = {count.join(", ")}
      </h1>

      <h1 className="text-lg font-semibold">
        Count 2 = {count2.join(", ")}
      </h1>

      <h2 className="text-base mt-2">Name: {name}</h2>
      <h3 className="text-base">Location: {location}</h3>
      <h4 className="text-sm text-gray-600">
        Contact: @Tushal_loahr
      </h4>
    </div>
  );
};

export default User;
