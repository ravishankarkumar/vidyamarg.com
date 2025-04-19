---
title: Physics Book - Coulomb’s Law for JEE & NEET
description: Learn Coulomb’s law for JEE and NEET, covering electric charge, force calculations, superposition, and electric fields, with practice MCQs.
slug: book/physics/coulombs-law
keywords: physics Coulomb’s law, JEE physics electric field, NEET physics charge interactions, electrostatics
og:image: https://vidyamarg.com/og-physics-coulombs-law.jpg
---

# Chapter 21: Coulomb’s Law

Coulomb’s law describes the electrostatic force between charged particles, forming the foundation of electrostatics. This chapter explores electric charge and Coulomb’s law, the superposition principle, electric fields due to point charges, and electric field lines for charge distributions. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on force calculations, field strength, and charge interactions. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master electrostatics in competitive exams, ensuring precision and conceptual clarity.

## 21.1 Electric Charge and Coulomb’s Law

**Electric charge** is a fundamental property of matter, existing as positive (e.g., protons) or negative (e.g., electrons), measured in coulombs (C). **Coulomb’s law** states that the force between two point charges \( q_1 \) and \( q_2 \), separated by distance \( r \), is \( F = k \frac{|q_1 q_2|}{r^2} \), where \( k = \frac{1}{4 \pi \epsilon_0} \approx 8.987 \times 10^9 \, \text{N·m}^2/\text{C}^2 \) is the Coulomb constant, and \( \epsilon_0 = 8.854 \times 10^{-12} \, \text{C}^2/\text{N·m}^2 \) is the permittivity of free space. The force is attractive for unlike charges and repulsive for like charges. JEE/NEET problems involve calculating forces or charge magnitudes. *Fundamentals of Physics* emphasizes Coulomb’s law as analogous to Newton’s gravitational law.

**Solved Example**: A JEE Main problem involves two point charges, \( q_1 = +2 \, \mu\text{C} \) and \( q_2 = -3 \, \mu\text{C} \), separated by 0.1 m. Calculate the force between them.
- **Solution**: Coulomb’s law: \( F = k \frac{|q_1 q_2|}{r^2} \). Given \( q_1 = 2 \times 10^{-6} \, \text{C} \), \( q_2 = -3 \times 10^{-6} \, \text{C} \), \( r = 0.1 \, \text{m} \), \( k = 8.987 \times 10^9 \, \text{N·m}^2/\text{C}^2 \): \( |q_1 q_2| = 6 \times 10^{-12} \, \text{C}^2 \), \( r^2 = 0.01 \, \text{m}^2 \), \( F = 8.987 \times 10^9 \times \frac{6 \times 10^{-12}}{0.01} = 8.987 \times 10^9 \times 6 \times 10^{-10} = 5.3922 \times 10^0 = 5.392 \, \text{N} \approx 5.39 \, \text{N} \) (3 significant figures, April 14, 2025). The force is attractive (unlike charges). This is a standard JEE force problem.
  - **JEE Tip**: Use SI units (C, m); include magnitude for force. Common error: Omitting \( k \) or incorrect sign.

**Solved Example**: A NEET problem involves two charges exerting a 0.9 N repulsive force when 0.2 m apart. If one charge is \( 4 \, \mu\text{C} \), calculate the other charge.
- **Solution**: Coulomb’s law: \( F = k \frac{|q_1 q_2|}{r^2} \). Given \( F = 0.9 \, \text{N} \), \( q_1 = 4 \times 10^{-6} \, \text{C} \), \( r = 0.2 \, \text{m} \), \( k = 8.987 \times 10^9 \, \text{N·m}^2/\text{C}^2 \): \( 0.9 = 8.987 \times 10^9 \times \frac{4 \times 10^{-6} \times |q_2|}{0.04} \), \( 0.9 = 8.987 \times 10^9 \times 10^{-7} \times |q_2| \), \( |q_2| = \frac{0.9}{8.987 \times 10^2} \approx 1.001 \times 10^{-3} \, \text{C} = 1.001 \times 10^{-6} \, \text{C} \approx 1.00 \, \mu\text{C} \) (3 significant figures). The charge is \( \pm 1.00 \, \mu\text{C} \) (repulsive, so same sign). This is a typical NEET charge problem.
  - **NEET Tip**: Solve for magnitude; consider sign for direction. Common error: Incorrect units or sign.

## 21.2 Superposition Principle

The **superposition principle** states that the net force on a charge due to multiple charges is the vector sum of individual forces. For \( n \) charges, the force on a charge \( q \) is \( \vec{F} = \sum_{i=1}^n \vec{F}_i \), where each \( \vec{F}_i = k \frac{q q_i}{r_i^2} \hat{r}_i \). JEE/NEET problems involve calculating net forces in 2D or 3D configurations, often requiring vector components. *University Physics* highlights superposition as key to complex charge systems.

**Solved Example**: A JEE Advanced problem involves three charges: \( q_1 = +2 \, \mu\text{C} \) at (0, 0), \( q_2 = -2 \, \mu\text{C} \) at (0.1, 0), and \( q_3 = +3 \, \mu\text{C} \) at (0, 0.1). Calculate the net force on \( q_3 \).
- **Solution**: Net force: \( \vec{F} = \vec{F}_1 + \vec{F}_2 \). For \( q_1 \) on \( q_3 \): \( r = 0.1 \, \text{m} \), \( F_1 = 8.987 \times 10^9 \times \frac{2 \times 10^{-6} \times 3 \times 10^{-6}}{0.01} = 5.392 \, \text{N} \), along \( -y \)-axis: \( \vec{F}_1 = -5.392 \hat{j} \, \text{N} \). For \( q_2 \) on \( q_3 \): \( r = 0.1 \, \text{m} \), \( F_2 = 5.392 \, \text{N} \), attractive (unlike), along \( +x \)-axis: \( \vec{F}_2 = 5.392 \hat{i} \, \text{N} \). Net force: \( \vec{F} = 5.392 \hat{i} - 5.392 \hat{j} \, \text{N} \). Magnitude: \( |\vec{F}| = \sqrt{5.392^2 + (-5.392)^2} = \sqrt{58.115} \approx 7.623 \, \text{N} \approx 7.62 \, \text{N} \) (3 significant figures). Direction: 45° below positive \( x \)-axis. This is a classic JEE superposition problem.
  - **JEE Tip**: Use vector components; check directions. Common error: Incorrect signs or scalar addition.

**Solved Example**: A NEET problem involves two charges \( q_1 = +4 \, \mu\text{C} \) at (0, 0) and \( q_2 = -4 \, \mu\text{C} \) at (0.2, 0). A third charge \( q_3 = +2 \, \mu\text{C} \) is at (0.1, 0). Is the net force on \( q_3 \) zero?
- **Solution**: Net force: \( \vec{F} = \vec{F}_1 + \vec{F}_2 \). For \( q_1 \): \( r = 0.1 \, \text{m} \), \( F_1 = 8.987 \times 10^9 \times \frac{4 \times 10^{-6} \times 2 \times 10^{-6}}{0.01} = 7.1896 \, \text{N} \), repulsive, along \( +x \): \( \vec{F}_1 = 7.1896 \hat{i} \, \text{N} \). For \( q_2 \): \( r = 0.1 \, \text{m} \), \( F_2 = 7.1896 \, \text{N} \), attractive, along \( -x \): \( \vec{F}_2 = -7.1896 \hat{i} \, \text{N} \). Net force: \( \vec{F} = 7.1896 \hat{i} - 7.1896 \hat{i} = 0 \, \text{N} \). Option (a) “Zero” is correct. This is a typical NEET equilibrium problem.
  - **NEET Tip**: Check symmetry; zero force requires cancellation. Common error: Ignoring direction.

## 21.3 Electric Field Due to Point Charges

The **electric field** (\( \vec{E} \)) at a point is the force per unit positive test charge: \( \vec{E} = \frac{\vec{F}}{q_0} \). For a point charge \( q \), the field at distance \( r \) is \( \vec{E} = k \frac{q}{r^2} \hat{r} \). The field is radially outward for positive charges and inward for negative charges. JEE/NEET problems involve calculating \( \vec{E} \) or finding points where \( \vec{E} = 0 \). *Fundamentals of Physics* emphasizes the field as a vector quantity.

**Solved Example**: A JEE Main problem involves a charge \( q = +5 \, \mu\text{C} \) at the origin. Calculate the electric field at (0.3, 0).
- **Solution**: Electric field: \( \vec{E} = k \frac{q}{r^2} \hat{r} \). Given \( q = 5 \times 10^{-6} \, \text{C} \), \( r = 0.3 \, \text{m} \), \( k = 8.987 \times 10^9 \, \text{N·m}^2/\text{C}^2 \): \( E = 8.987 \times 10^9 \times \frac{5 \times 10^{-6}}{0.09} = 4.993 \times 10^5 \, \text{N/C} \approx 4.99 \times 10^5 \, \text{N/C} \) (3 significant figures). Direction: along \( +x \)-axis (positive charge). \( \vec{E} = 4.99 \times 10^5 \hat{i} \, \text{N/C} \). This is a standard JEE field problem.
  - **JEE Tip**: Use SI units; include direction. Common error: Incorrect \( r^2 \) or sign.

**Solved Example**: A NEET problem involves two charges \( q_1 = +2 \, \mu\text{C} \) at \( x = 0 \) and \( q_2 = -2 \, \mu\text{C} \) at \( x = 0.4 \, \text{m} \). Find the point on the x-axis where the electric field is zero.
- **Solution**: For \( \vec{E} = 0 \), \( E_1 = E_2 \). Let the point be at \( x = d \, \text{m} \). Field from \( q_1 \): \( E_1 = k \frac{|q_1|}{d^2} \), direction depends on \( d \). Field from \( q_2 \): \( E_2 = k \frac{|q_2|}{(0.4 - d)^2} \). Since \( |q_1| = |q_2| = 2 \times 10^{-6} \, \text{C} \), set magnitudes equal: \( \frac{k \times 2 \times 10^{-6}}{d^2} = \frac{k \times 2 \times 10^{-6}}{(0.4 - d)^2} \), \( d^2 = (0.4 - d)^2 \). Take square root: \( d = 0.4 - d \), \( 2d = 0.4 \), \( d = 0.2 \, \text{m} \). Verify: At \( x = 0.2 \, \text{m} \), fields cancel (opposite directions). Option (a) \( x = 0.2 \, \text{m} \). This is a typical NEET field zero problem.
  - **NEET Tip**: Solve for equal magnitudes; check directions. Common error: Incorrect distance or sign.

## 21.4 Electric Field Lines and Charge Distributions

**Electric field lines** represent the direction of \( \vec{E} \), pointing from positive to negative charges, with density indicating field strength. For **charge distributions**, the field is the vector sum of contributions from each charge. For a continuous distribution, \( \vec{E} = \int d\vec{E} \). JEE/NEET problems involve sketching field lines or calculating fields for systems like dipoles or charged rods. *University Physics* connects field lines to visualization of charge interactions.

**Solved Example**: A JEE Advanced problem involves an electric dipole with charges \( +q = +2 \, \mu\text{C} \) at (0, 0.01) and \( -q = -2 \, \mu\text{C} \) at (0, -0.01). Calculate the electric field at (0.1, 0).
- **Solution**: Net field: \( \vec{E} = \vec{E}_+ + \vec{E}_- \). For \( +q \): \( r = \sqrt{0.1^2 + 0.01^2} = \sqrt{0.0101} \approx 0.1005 \, \text{m} \), \( E_+ = 8.987 \times 10^9 \times \frac{2 \times 10^{-6}}{0.0101} \approx 1.779 \times 10^5 \, \text{N/C} \), direction: \( \theta = \tan^{-1}(0.01/0.1) \approx 5.71^\circ \), \( \vec{E}_+ \approx 1.779 \times 10^5 (\cos 5.71^\circ \hat{i} + \sin 5.71^\circ \hat{j}) \approx 1.772 \times 10^5 \hat{i} + 1.773 \times 10^4 \hat{j} \, \text{N/C} \). For \( -q \): same magnitude, opposite direction: \( \vec{E}_- \approx -1.772 \times 10^5 \hat{i} + 1.773 \times 10^4 \hat{j} \, \text{N/C} \). Net: \( \vec{E} \approx (0 \hat{i} + 3.546 \times 10^4 \hat{j}) \, \text{N/C} \approx 3.55 \times 10^4 \hat{j} \, \text{N/C} \) (3 significant figures). This is a classic JEE dipole problem.
  - **JEE Tip**: Sum vector components; use small-angle approximations. Common error: Incorrect angles or scalar addition.

**Solved Example**: A NEET problem asks the direction of electric field lines for a positive point charge.
- **Solution**: For a positive point charge, field lines radiate **outward** radially, as the field points away from positive charges. Option (a) “Outward from the charge” is correct. This is a typical NEET field line problem.
  - **NEET Tip**: Positive charges: lines outward; negative: inward. Common error: Reversing directions.

## Review & Summary
- **Coulomb’s Law**: \( F = k \frac{|q_1 q_2|}{r^2} \); attractive for unlike, repulsive for like charges.
- **Superposition**: Net force is vector sum of individual forces.
- **Electric Field**: \( \vec{E} = k \frac{q}{r^2} \hat{r} \) for point charge; vector sum for multiple charges.
- **Field Lines**: Radiate outward (positive) or inward (negative); density shows field strength.

## Quick Revision Section
- **Key Equations**:
  - Coulomb’s law: \( F = k \frac{|q_1 q_2|}{r^2} \), \( k = \frac{1}{4 \pi \epsilon_0} \)
  - Electric field: \( \vec{E} = k \frac{q}{r^2} \hat{r} \)
  - Superposition: \( \vec{F} = \sum \vec{F}_i \), \( \vec{E} = \sum \vec{E}_i \)
- **SI Units**: Charge (C), force (N), electric field (N/C or V/m), distance (m).
- **JEE/NEET Tips**: Use SI units, verify significant figures (April 14, 2025), apply vector addition, sketch field lines for visualization.
- **Applications**: Capacitors, particle accelerators, electrostatic shielding.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of Coulomb’s law, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/coulombs-law/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make Coulomb’s law engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing electric fields and field lines coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*