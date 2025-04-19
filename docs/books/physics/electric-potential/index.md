---
title: Physics Book - Electric Potential for JEE & NEET
description: Learn electric potential for JEE and NEET, covering potential energy, calculations, continuous distributions, and equipotential surfaces, with practice MCQs.
slug: book/physics/electric-potential
keywords: physics electric potential, JEE physics potential energy, NEET physics equipotential surfaces, electrostatics
og:image: https://vidyamarg.com/og-physics-electric-potential.jpg
---

# Chapter 24: Electric Potential

Electric potential provides a scalar approach to electrostatics, simplifying energy and work calculations. This chapter explores electric potential energy and potential, calculating potential for point charges and systems, potential due to continuous charge distributions, and equipotential surfaces with applications. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on potential differences, energy, and conductor properties. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master electric potential in competitive exams, ensuring precision and conceptual clarity.

## 24.1 Electric Potential Energy and Potential

**Electric potential energy** (\( U \)) is the work done to assemble a charge configuration, given by \( U = k \frac{q_1 q_2}{r} \) for two point charges. **Electric potential** (\( V \)) is the potential energy per unit charge, \( V = \frac{U}{q} \), with units volts (V). For a point charge \( q \), \( V = k \frac{q}{r} \). JEE/NEET problems involve calculating \( U \) or \( V \) for charge systems. *Fundamentals of Physics* emphasizes potential as a scalar quantity.

**Solved Example**: A JEE Main problem involves two point charges \( q_1 = +2 \, \mu\text{C} \) and \( q_2 = -3 \, \mu\text{C} \), 0.2 m apart. Calculate the electric potential at the midpoint (\( k = 8.987 \times 10^9 \, \text{N·m}^2/\text{C}^2 \)).
- **Solution**: Potential: \( V = k \sum \frac{q_i}{r_i} \). Midpoint distance: \( r = 0.1 \, \text{m} \). For \( q_1 \): \( V_1 = 8.987 \times 10^9 \times \frac{2 \times 10^{-6}}{0.1} = 1.7974 \times 10^5 \, \text{V} \). For \( q_2 \): \( V_2 = 8.987 \times 10^9 \times \frac{-3 \times 10^{-6}}{0.1} = -2.6961 \times 10^5 \, \text{V} \). Net: \( V = 1.7974 \times 10^5 - 2.6961 \times 10^5 = -8.987 \times 10^4 \approx -8.99 \times 10^4 \, \text{V} \) (3 significant figures, April 14, 2025). This is a standard JEE potential problem.
  - **JEE Tip**: Sum potentials as scalars; include signs. Common error: Using vector addition or incorrect distance.

**Solved Example**: A NEET problem involves a point charge \( q = +5 \, \mu\text{C} \) at the origin. What is the potential at 0.3 m?
- **Solution**: \( V = k \frac{q}{r} \). Given \( q = 5 \times 10^{-6} \, \text{C} \), \( r = 0.3 \, \text{m} \): \( V = 8.987 \times 10^9 \times \frac{5 \times 10^{-6}}{0.3} \approx 1.498 \times 10^5 \approx 1.50 \times 10^5 \, \text{V} \). Option (a) “1.50 × 10⁵ V” is correct. This is a typical NEET potential problem.
  - **NEET Tip**: Use scalar formula; check units. Common error: Forgetting \( k \).

## 24.2 Calculating Electric Potential

Potential for a system of charges is \( V = k \sum \frac{q_i}{r_i} \). Potential difference \( \Delta V = -\int \vec{E} \cdot d\vec{l} \) relates to the electric field. For a uniform field, \( V = -E d \cos\theta \). JEE/NEET problems involve computing \( V \) for configurations or finding work done. *University Physics* connects potential to energy conservation.

**Solved Example**: A JEE Advanced problem involves three charges: \( q_1 = +1 \, \mu\text{C} \) at (0, 0), \( q_2 = -2 \, \mu\text{C} \) at (0.2, 0), and \( q_3 = +3 \, \mu\text{C} \) at (0, 0.2). Calculate the potential at (0.2, 0.2) (\( k = 8.987 \times 10^9 \, \text{N·m}^2/\text{C}^2 \)).
- **Solution**: Distances: For \( q_1 \): \( r = \sqrt{0.2^2 + 0.2^2} = 0.2828 \, \text{m} \), \( V_1 = 8.987 \times 10^9 \times \frac{10^{-6}}{0.2828} \approx 3.176 \times 10^4 \, \text{V} \). For \( q_2 \): \( r = 0.2 \, \text{m} \), \( V_2 = 8.987 \times 10^9 \times \frac{-2 \times 10^{-6}}{0.2} = -8.987 \times 10^4 \, \text{V} \). For \( q_3 \): \( r = 0.2 \, \text{m} \), \( V_3 = 8.987 \times 10^9 \times \frac{3 \times 10^{-6}}{0.2} = 1.348 \times 10^5 \, \text{V} \). Net: \( V \approx 7.619 \times 10^4 \approx 7.62 \times 10^4 \, \text{V} \). This is a classic JEE system problem.
  - **JEE Tip**: Compute distances accurately; sum scalars. Common error: Incorrect signs or distances.

**Solved Example**: A NEET problem involves a uniform field \( E = 100 \, \text{N/C} \) along the x-axis. Calculate the potential difference between (0, 0) and (0.5, 0).
- **Solution**: \( \Delta V = -E \Delta x \). Given \( E = 100 \, \text{N/C} \), \( \Delta x = 0.5 \, \text{m} \): \( \Delta V = -100 \times 0.5 = -50 \, \text{V} \). Option (a) “-50 V” is correct. This is a typical NEET field problem.
  - **NEET Tip**: Use negative sign for field direction. Common error: Omitting sign.

## 24.3 Potential Due to Continuous Charge Distributions

For **continuous distributions**, potential is calculated as \( V = k \int \frac{dq}{r} \). Common cases include charged rods, rings, and disks. JEE/NEET problems involve setting up integrals for potential. *Fundamentals of Physics* emphasizes choosing a reference point (often infinity).

**Solved Example**: A JEE Advanced problem involves a uniformly charged rod (length 0.2 m, charge \( Q = 4 \, \mu\text{C} \)) from \( x = 0 \) to \( x = 0.2 \, \text{m} \). Calculate the potential at \( x = 0.3 \, \text{m} \) (\( k = 8.987 \times 10^9 \, \text{N·m}^2/\text{C}^2 \)).
- **Solution**: Linear charge density: \( \lambda = \frac{4 \times 10^{-6}}{0.2} = 2 \times 10^{-5} \, \text{C/m} \). Potential: \( V = k \lambda \int_0^{0.2} \frac{dx}{0.3 - x} \). Let \( u = 0.3 - x \), \( du = -dx \), limits \( x = 0 \) to \( x = 0.2 \): \( u = 0.3 \) to \( u = 0.1 \). \( V = k \lambda \ln\left( \frac{0.3}{0.1} \right) = 8.987 \times 10^9 \times 2 \times 10^{-5} \times \ln 3 \approx 1.974 \times 10^5 \, \text{V} \approx 1.97 \times 10^5 \, \text{V} \). This is a classic JEE integration problem.
  - **JEE Tip**: Integrate carefully; use natural log. Common error: Incorrect limits or reference point.

**Solved Example**: A NEET problem involves a charged ring (radius 0.1 m, charge \( Q = 2 \, \mu\text{C} \)). What is the potential at the center?
- **Solution**: At center, \( r = 0.1 \, \text{m} \) for all charges: \( V = k \frac{Q}{r} = 8.987 \times 10^9 \times \frac{2 \times 10^{-6}}{0.1} \approx 1.798 \times 10^5 \, \text{V} \). Option (a) “1.80 × 10⁵ V” is correct. This is a typical NEET ring problem.
  - **NEET Tip**: All charges equidistant at center. Common error: Using field formula.

## 24.4 Equipotential Surfaces and Applications

**Equipotential surfaces** are regions where potential is constant, perpendicular to electric field lines. For a point charge, surfaces are spherical; for a uniform field, planar. Work done moving a charge on an equipotential is zero. JEE/NEET problems involve identifying surfaces or calculating work. *University Physics* connects equipotentials to capacitors and conductors.

**Solved Example**: A JEE Main problem involves a dipole with charges \( \pm 2 \, \mu\text{C} \), separation 0.02 m. Calculate the potential at a point on the perpendicular bisector 0.3 m away (\( k = 8.987 \times 10^9 \, \text{N·m}^2/\text{C}^2 \)).
- **Solution**: For a dipole, \( V = \frac{k p \cos\theta}{r^2} \). Perpendicular bisector: \( \theta = 90^\circ \), \( \cos\theta = 0 \), so \( V = 0 \, \text{V} \). This is a standard JEE dipole problem.
  - **JEE Tip**: Potential zero on dipole’s perpendicular bisector. Common error: Assuming non-zero potential.

**Solved Example**: A NEET problem asks the shape of equipotential surfaces for a point charge.
- **Solution**: Equipotential surfaces are **spherical** for a point charge, as potential depends only on distance. Option (a) “Spherical” is correct. This is a typical NEET surface problem.
  - **NEET Tip**: Relate shape to potential’s dependence. Common error: Assuming planar surfaces.

## Review & Summary
- **Potential Energy**: \( U = k \frac{q_1 q_2}{r} \); Potential: \( V = k \frac{q}{r} \).
- **System Potential**: \( V = k \sum \frac{q_i}{r_i} \); Difference: \( \Delta V = -\int \vec{E} \cdot d\vec{l} \).
- **Continuous Distributions**: \( V = k \int \frac{dq}{r} \).
- **Equipotentials**: Constant potential surfaces; perpendicular to field; zero work on surface.

## Quick Revision Section
- **Key Equations**:
  - Potential: \( V = k \frac{q}{r} \)
  - System: \( V = k \sum \frac{q_i}{r_i} \)
  - Continuous: \( V = k \int \frac{dq}{r} \)
  - Difference: \( \Delta V = -E d \cos\theta \) (uniform field)
- **SI Units**: Potential (V), energy (J), distance (m), charge (C).
- **JEE/NEET Tips**: Sum potentials as scalars, verify significant figures (April 14, 2025), choose infinity as reference, sketch equipotentials.
- **Applications**: Capacitors, particle accelerators, biological membranes.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of electric potential, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/electric-potential/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make electric potential engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing equipotential surfaces and potential plots coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*