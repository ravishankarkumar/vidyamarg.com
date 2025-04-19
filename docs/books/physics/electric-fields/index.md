---
title: Physics Book - Electric Fields for JEE & NEET
description: Learn electric fields for JEE and NEET, covering field calculations, continuous distributions, particle motion, and dipoles, with practice MCQs.
slug: book/physics/electric-fields
keywords: physics electric fields, JEE physics dipole fields, NEET physics charge motion, electrostatics
og:image: https://vidyamarg.com/og-physics-electric-fields.jpg
---

# Chapter 22: Electric Fields

Electric fields describe the region around charges where forces act on other charges, fundamental to electrostatics. This chapter explores electric field calculations, fields due to continuous charge distributions, motion of charged particles in fields, and electric dipoles. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on field strength, particle trajectories, and dipole behavior. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master electric fields in competitive exams, ensuring precision and conceptual clarity.

## 22.1 Electric Field and Field Calculations

The **electric field** (\( \vec{E} \)) at a point is the force per unit positive test charge: \( \vec{E} = \frac{\vec{F}}{q_0} \). For a point charge \( q \), the field at distance \( r \) is \( \vec{E} = k \frac{q}{r^2} \hat{r} \), where \( k = \frac{1}{4 \pi \epsilon_0} \approx 8.987 \times 10^9 \, \text{N·m}^2/\text{C}^2 \), and \( \epsilon_0 = 8.854 \times 10^{-12} \, \text{C}^2/\text{N·m}^2 \). For multiple charges, the field is the vector sum: \( \vec{E} = \sum \vec{E}_i \). JEE/NEET problems involve calculating fields or finding zero-field points. *Fundamentals of Physics* emphasizes the vector nature of fields.

**Solved Example**: A JEE Main problem involves two charges \( q_1 = +4 \, \mu\text{C} \) at (0, 0) and \( q_2 = -2 \, \mu\text{C} \) at (0.2, 0). Calculate the electric field at (0.1, 0).
- **Solution**: Net field: \( \vec{E} = \vec{E}_1 + \vec{E}_2 \). For \( q_1 \): \( r = 0.1 \, \text{m} \), \( E_1 = 8.987 \times 10^9 \times \frac{4 \times 10^{-6}}{0.01} = 3.5948 \times 10^6 \, \text{N/C} \), along \( +x \): \( \vec{E}_1 = 3.5948 \times 10^6 \hat{i} \, \text{N/C} \). For \( q_2 \): \( r = 0.1 \, \text{m} \), \( E_2 = 8.987 \times 10^9 \times \frac{2 \times 10^{-6}}{0.01} = 1.7974 \times 10^6 \, \text{N/C} \), along \( +x \) (negative charge, field toward it): \( \vec{E}_2 = 1.7974 \times 10^6 \hat{i} \, \text{N/C} \). Net: \( \vec{E} = (3.5948 + 1.7974) \times 10^6 \hat{i} = 5.3922 \times 10^6 \hat{i} \, \text{N/C} \approx 5.39 \times 10^6 \hat{i} \, \text{N/C} \) (3 significant figures, April 14, 2025). This is a standard JEE field problem.
  - **JEE Tip**: Sum vector components; check field directions. Common error: Incorrect signs or scalar addition.

**Solved Example**: A NEET problem involves a charge \( q = +3 \, \mu\text{C} \) at the origin. What is the electric field direction at (0.2, 0)?
- **Solution**: For a positive charge, the electric field points **outward** radially. At (0.2, 0), the field is along the **positive x-axis**. Option (a) “Positive x-direction” is correct. This is a typical NEET field direction problem.
  - **NEET Tip**: Positive charge: field outward; negative: inward. Common error: Reversing direction.

## 22.2 Electric Field Due to Continuous Charge Distributions

For **continuous charge distributions**, the electric field is calculated by integrating contributions from differential charge elements: \( \vec{E} = \int d\vec{E} \), where \( d\vec{E} = k \frac{dq}{r^2} \hat{r} \). Common distributions include charged rods, rings, and sheets. JEE/NEET problems involve setting up integrals for fields from linear or surface charges. *University Physics* emphasizes symmetry to simplify calculations.

**Solved Example**: A JEE Advanced problem involves a uniformly charged rod of length 0.2 m with total charge \( Q = 10 \, \mu\text{C} \), along the x-axis from \( x = 0 \) to \( x = 0.2 \, \text{m} \). Calculate the electric field at \( x = 0.3 \, \text{m} \).
- **Solution**: Linear charge density: \( \lambda = \frac{Q}{L} = \frac{10 \times 10^{-6}}{0.2} = 5 \times 10^{-5} \, \text{C/m} \). For a differential element \( dx \) at \( x \), charge \( dq = \lambda dx \), distance to point \( r = 0.3 - x \), field \( dE = k \frac{dq}{(0.3 - x)^2} = k \frac{\lambda dx}{(0.3 - x)^2} \), along \( +x \). Integrate: \( E = \int_0^{0.2} 8.987 \times 10^9 \times \frac{5 \times 10^{-5}}{(0.3 - x)^2} dx = 4.4935 \times 10^5 \int_0^{0.2} \frac{dx}{(0.3 - x)^2} \). Let \( u = 0.3 - x \), \( du = -dx \), limits \( x = 0 \) to \( x = 0.2 \): \( u = 0.3 \) to \( u = 0.1 \), \( \int \frac{dx}{(0.3 - x)^2} = -\int \frac{du}{u^2} = \int_{0.3}^{0.1} \frac{du}{u^2} = \left[ -\frac{1}{u} \right]_{0.3}^{0.1} = -\frac{1}{0.1} + \frac{1}{0.3} = -10 + 3.333 = -6.667 \, \text{m}^{-1} \). Thus, \( E = 4.4935 \times 10^5 \times 6.667 \approx 2.997 \times 10^6 \, \text{N/C} \approx 3.00 \times 10^6 \, \text{N/C} \) (3 significant figures). This is a classic JEE integration problem.
  - **JEE Tip**: Use symmetry; set up integral carefully. Common error: Incorrect limits or vector direction.

**Solved Example**: A NEET problem involves a charged ring with total charge \( Q = 5 \, \mu\text{C} \) and radius 0.1 m. What is the electric field at its center?
- **Solution**: For a uniformly charged ring, the electric field at the center is **zero** due to symmetry (all field components cancel). Option (a) “Zero” is correct. This is a typical NEET symmetry problem.
  - **NEET Tip**: Recognize symmetry for zero fields. Common error: Assuming non-zero field.

## 22.3 Motion of Charged Particles in Electric Fields

A charged particle in a uniform electric field experiences a force \( \vec{F} = q \vec{E} \), causing acceleration \( \vec{a} = \frac{q \vec{E}}{m} \). For constant fields, motion is analyzed using kinematic equations. JEE/NEET problems involve calculating trajectories, velocities, or deflections. *Fundamentals of Physics* connects field-induced motion to applications like cathode ray tubes.

**Solved Example**: A JEE Main problem involves an electron (\( q = -1.602 \times 10^{-19} \, \text{C} \), \( m = 9.109 \times 10^{-31} \, \text{kg} \)) in a uniform field \( \vec{E} = 1000 \hat{j} \, \text{N/C} \). Calculate its acceleration.
- **Solution**: Acceleration: \( \vec{a} = \frac{q \vec{E}}{m} \). Given \( q = -1.602 \times 10^{-19} \, \text{C} \), \( \vec{E} = 1000 \hat{j} \, \text{N/C} \), \( m = 9.109 \times 10^{-31} \, \text{kg} \): \( \vec{a} = \frac{-1.602 \times 10^{-19} \times 1000 \hat{j}}{9.109 \times 10^{-31}} = \frac{-1.602 \times 10^{-16}}{9.109 \times 10^{-31}} \hat{j} \approx -1.759 \times 10^{14} \hat{j} \, \text{m/s}^2 \approx -1.76 \times 10^{14} \hat{j} \, \text{m/s}^2 \) (3 significant figures, April 14, 2025). This is a standard JEE motion problem.
  - **JEE Tip**: Include charge sign; use SI units. Common error: Omitting negative sign or incorrect mass.

**Solved Example**: A NEET problem involves a proton in a uniform electric field. What is the direction of its acceleration?
- **Solution**: A proton (\( q = +1.602 \times 10^{-19} \, \text{C} \)) in a field \( \vec{E} \) experiences \( \vec{F} = q \vec{E} \), so acceleration \( \vec{a} = \frac{q \vec{E}}{m} \) is in the **same direction** as \( \vec{E} \) (positive charge). Option (a) “Same as field” is correct. This is a typical NEET motion problem.
  - **NEET Tip**: Positive charge: acceleration aligns with field. Common error: Reversing direction.

## 22.4 Electric Dipoles and Field Patterns

An **electric dipole** consists of equal and opposite charges \( \pm q \) separated by distance \( d \), with dipole moment \( \vec{p} = q \vec{d} \). The electric field on the dipole’s axis (far away) is \( \vec{E} \approx \frac{2 k p}{r^3} \hat{r} \), and perpendicular to the axis, \( \vec{E} \approx \frac{k p}{r^3} \hat{r} \). Torque on a dipole in a field is \( \vec{\tau} = \vec{p} \times \vec{E} \). JEE/NEET problems involve calculating dipole fields or torque. *University Physics* connects dipoles to molecular interactions.

**Solved Example**: A JEE Advanced problem involves a dipole with \( q = \pm 2 \, \mu\text{C} \), separation 0.02 m, centered at the origin along the y-axis. Calculate the electric field at (0.3, 0).
- **Solution**: Dipole moment: \( p = q d = 2 \times 10^{-6} \times 0.02 = 4 \times 10^{-8} \, \text{C·m} \), along \( +y \). At (0.3, 0) (on perpendicular bisector), \( E \approx \frac{k p}{r^3} \), along \( -y \) (for \( \vec{p} \) along \( +y \)). Given \( r = 0.3 \, \text{m} \): \( E = 8.987 \times 10^9 \times \frac{4 \times 10^{-8}}{0.027} \approx 1.332 \times 10^4 \, \text{N/C} \approx 1.33 \times 10^4 \, \text{N/C} \). \( \vec{E} = -1.33 \times 10^4 \hat{j} \, \text{N/C} \) (3 significant figures). This is a classic JEE dipole problem.
  - **JEE Tip**: Use far-field approximation; check dipole orientation. Common error: Incorrect \( r^3 \) or direction.

**Solved Example**: A NEET problem asks the torque direction on a dipole in a uniform field.
- **Solution**: Torque: \( \vec{\tau} = \vec{p} \times \vec{E} \). The torque is **perpendicular** to both the dipole moment and field, aligning the dipole with the field. Option (a) “Perpendicular to dipole and field” is correct. This is a typical NEET torque problem.
  - **NEET Tip**: Use cross-product rule; torque aligns dipole. Common error: Assuming parallel direction.

## Review & Summary
- **Electric Field**: \( \vec{E} = k \frac{q}{r^2} \hat{r} \) for point charge; vector sum for multiple charges.
- **Continuous Distributions**: \( \vec{E} = \int k \frac{dq}{r^2} \hat{r} \); use symmetry.
- **Particle Motion**: \( \vec{a} = \frac{q \vec{E}}{m} \); kinematic equations for trajectories.
- **Dipoles**: Field \( \frac{k p}{r^3} \) (perpendicular), \( \frac{2 k p}{r^3} \) (axial); torque \( \vec{p} \times \vec{E} \).

## Quick Revision Section
- **Key Equations**:
  - Electric field: \( \vec{E} = k \frac{q}{r^2} \hat{r} \)
  - Continuous distribution: \( \vec{E} = \int k \frac{dq}{r^2} \hat{r} \)
  - Acceleration: \( \vec{a} = \frac{q \vec{E}}{m} \)
  - Dipole field: \( \vec{E} \approx \frac{k p}{r^3} \hat{r} \) (perpendicular), torque \( \vec{\tau} = \vec{p} \times \vec{E} \)
- **SI Units**: Electric field (N/C or V/m), charge (C), distance (m), dipole moment (C·m).
- **JEE/NEET Tips**: Use SI units, verify significant figures (April 14, 2025), apply vector summation, use symmetry for integrals.
- **Applications**: CRTs, particle accelerators, molecular interactions.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of electric fields, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/electric-fields/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make electric fields engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing dipole fields and particle motion coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*