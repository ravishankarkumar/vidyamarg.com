---
title: Physics Book - Gauss’s Law for JEE & NEET
description: Learn Gauss’s law for JEE and NEET, covering electric flux, applications to symmetric charge distributions, and conductors, with practice MCQs.
slug: book/physics/gauss-law
keywords: physics Gauss’s law, JEE physics electric flux, NEET physics spherical symmetry, electrostatics
og:image: https://vidyamarg.com/og-physics-gauss-law.jpg
---

# Chapter 23: Gauss’s Law

Gauss’s law relates electric fields to charge distributions, offering a powerful method to compute fields in symmetric systems. This chapter explores electric flux and Gauss’s law, its applications to point charges and spherical symmetry, cylindrical and planar symmetry, and conductors. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on field calculations, charge distributions, and conductor properties. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master Gauss’s law in competitive exams, ensuring precision and conceptual clarity.

## 23.1 Electric Flux and Gauss’s Law

**Electric flux** (\( \Phi_E \)) measures the electric field passing through a surface, defined as \( \Phi_E = \int \vec{E} \cdot d\vec{A} \), where \( \vec{E} \) is the electric field and \( d\vec{A} \) is the differential area vector. **Gauss’s law** states: \( \Phi_E = \frac{q_{\text{enc}}}{\epsilon_0} \), where \( q_{\text{enc}} \) is the enclosed charge and \( \epsilon_0 = 8.854 \times 10^{-12} \, \text{C}^2/\text{N·m}^2 \) is the permittivity of free space. JEE/NEET problems involve calculating flux or applying Gauss’s law to find fields. *Fundamentals of Physics* emphasizes flux as a measure of field lines.

**Solved Example**: A JEE Main problem involves a point charge \( q = +5 \, \mu\text{C} \) at the origin. Calculate the electric flux through a spherical surface of radius 0.2 m centered at the origin.
- **Solution**: Gauss’s law: \( \Phi_E = \frac{q_{\text{enc}}}{\epsilon_0} \). Given \( q = 5 \times 10^{-6} \, \text{C} \), \( \epsilon_0 = 8.854 \times 10^{-12} \, \text{C}^2/\text{N·m}^2 \): \( \Phi_E = \frac{5 \times 10^{-6}}{8.854 \times 10^{-12}} \approx 5.645 \times 10^5 \, \text{N·m}^2/\text{C} \approx 5.65 \times 10^5 \, \text{N·m}^2/\text{C} \) (3 significant figures, April 14, 2025). This is a standard JEE flux problem.
  - **JEE Tip**: Flux depends only on enclosed charge; radius is irrelevant. Common error: Using surface area unnecessarily.

**Solved Example**: A NEET problem involves a uniform electric field \( E = 200 \, \text{N/C} \) perpendicular to a flat surface of area 0.5 m². Calculate the electric flux.
- **Solution**: Flux: \( \Phi_E = E A \cos\theta \). Given \( E = 200 \, \text{N/C} \), \( A = 0.5 \, \text{m}^2 \), \( \theta = 0^\circ \): \( \Phi_E = 200 \times 0.5 \times 1 = 100 \, \text{N·m}^2/\text{C} \) (3 significant figures). This is a typical NEET flux problem.
  - **NEET Tip**: Use cosine for angle; ensure units match. Common error: Ignoring angle or units.

## 23.2 Applications of Gauss’s Law: Point Charges and Spherical Symmetry

Gauss’s law simplifies field calculations for symmetric charge distributions. For a **point charge** \( q \), using a spherical Gaussian surface, \( E = \frac{k q}{r^2} \). For a **spherical shell** with charge \( Q \), the field is zero inside and \( \frac{k Q}{r^2} \) outside. JEE/NEET problems involve applying Gauss’s law to spheres or shells. *University Physics* highlights symmetry in simplifying integrals.

**Solved Example**: A JEE Advanced problem involves a uniformly charged solid sphere (radius 0.1 m, total charge \( Q = 10 \, \mu\text{C} \)). Calculate the electric field at \( r = 0.05 \, \text{m} \).
- **Solution**: Inside a solid sphere, \( q_{\text{enc}} = Q \left( \frac{r}{R} \right)^3 \). Given \( r = 0.05 \, \text{m} \), \( R = 0.1 \, \text{m} \), \( Q = 10 \times 10^{-6} \, \text{C} \): \( q_{\text{enc}} = 10 \times 10^{-6} \times \left( \frac{0.05}{0.1} \right)^3 = 1.25 \times 10^{-6} \, \text{C} \). Gauss’s law: \( E \cdot 4 \pi r^2 = \frac{q_{\text{enc}}}{\epsilon_0} \), \( E = \frac{8.987 \times 10^9 \times 1.25 \times 10^{-6}}{4 \pi \times 0.05^2} \approx 3.577 \times 10^5 \, \text{N/C} \approx 3.58 \times 10^5 \, \text{N/C} \). This is a classic JEE sphere problem.
  - **JEE Tip**: Use enclosed charge fraction; simplify surface area. Common error: Using total charge.

**Solved Example**: A NEET problem involves a thin spherical shell (radius 0.2 m, charge \( Q = 4 \, \mu\text{C} \)). What is the electric field inside the shell?
- **Solution**: For a thin shell, \( q_{\text{enc}} = 0 \) inside. Gauss’s law: \( \Phi_E = 0 \), so \( E = 0 \, \text{N/C} \). Option (a) “Zero” is correct. This is a typical NEET shell problem.
  - **NEET Tip**: Inside a charged shell, field is zero. Common error: Assuming non-zero field.

## 23.3 Applications of Gauss’s Law: Cylindrical and Planar Symmetry

For **cylindrical symmetry** (e.g., infinite charged wire), Gauss’s law gives \( E = \frac{\lambda}{2 \pi \epsilon_0 r} \). For **planar symmetry** (e.g., infinite charged sheet), \( E = \frac{\sigma}{2 \epsilon_0} \). JEE/NEET problems involve calculating fields for wires or sheets. *Fundamentals of Physics* emphasizes choosing appropriate Gaussian surfaces.

**Solved Example**: A JEE Main problem involves an infinite wire with linear charge density \( \lambda = 2 \, \mu\text{C/m} \). Calculate the electric field at 0.1 m from the wire.
- **Solution**: Cylindrical Gaussian surface: \( E \cdot 2 \pi r L = \frac{\lambda L}{\epsilon_0} \), \( E = \frac{\lambda}{2 \pi \epsilon_0 r} = \frac{2 \times 8.987 \times 10^9 \times 2 \times 10^{-6}}{0.1} \approx 3.595 \times 10^5 \, \text{N/C} \approx 3.60 \times 10^5 \, \text{N/C} \). This is a standard JEE wire problem.
  - **JEE Tip**: Use cylindrical symmetry; cancel length. Common error: Incorrect surface area.

**Solved Example**: A NEET problem involves an infinite sheet with surface charge density \( \sigma = 8.854 \times 10^{-12} \, \text{C/m}^2 \). Calculate the electric field.
- **Solution**: Planar Gaussian surface: \( E \cdot 2 A = \frac{\sigma A}{\epsilon_0} \), \( E = \frac{\sigma}{2 \epsilon_0} = \frac{8.854 \times 10^{-12}}{2 \times 8.854 \times 10^{-12}} = 0.5 \, \text{N/C} \). Option (a) “0.5 N/C” is correct. This is a typical NEET sheet problem.
  - **NEET Tip**: Field is constant; use planar symmetry. Common error: Doubling field.

## 23.4 Conductors and Gauss’s Law

In **conductors**, charges reside on the surface, and the electric field inside is zero in electrostatic equilibrium. Gauss’s law helps analyze fields near conductor surfaces or cavities. JEE/NEET problems involve fields outside conductors or induced charges. *University Physics* connects conductors to shielding applications.

**Solved Example**: A JEE Advanced problem involves a conducting spherical shell (inner radius 0.1 m, outer radius 0.15 m, charge \( Q = 5 \, \mu\text{C} \)). Calculate the field at \( r = 0.12 \, \text{m} \).
- **Solution**: Inside conductor (between surfaces), \( E = 0 \) (no charge enclosed). This is a classic JEE conductor problem.
  - **JEE Tip**: Field is zero in conductor material. Common error: Assuming field exists.

**Solved Example**: A NEET problem asks the electric field inside a charged conductor.
- **Solution**: In electrostatic equilibrium, \( E = 0 \) inside a conductor. Option (a) “Zero” is correct. This is a typical NEET conductor problem.
  - **NEET Tip**: Charges on surface; internal field zero. Common error: Assuming internal field.

## Review & Summary
- **Electric Flux**: \( \Phi_E = \int \vec{E} \cdot d\vec{A} \); Gauss’s law: \( \Phi_E = \frac{q_{\text{enc}}}{\epsilon_0} \).
- **Spherical Symmetry**: Point charge: \( E = \frac{k q}{r^2} \); shell: zero inside, \( \frac{k Q}{r^2} \) outside.
- **Cylindrical/Planar**: Wire: \( E = \frac{\lambda}{2 \pi \epsilon_0 r} \); sheet: \( E = \frac{\sigma}{2 \epsilon_0} \).
- **Conductors**: \( E = 0 \) inside; charges on surface.

## Quick Revision Section
- **Key Equations**:
  - Gauss’s law: \( \Phi_E = \frac{q_{\text{enc}}}{\epsilon_0} \)
  - Point charge: \( E = \frac{k q}{r^2} \)
  - Wire: \( E = \frac{\lambda}{2 \pi \epsilon_0 r} \)
  - Sheet: \( E = \frac{\sigma}{2 \epsilon_0} \)
- **SI Units**: Flux (N·m²/C), field (N/C), charge (C), charge density (C/m or C/m²).
- **JEE/NEET Tips**: Choose symmetric Gaussian surfaces, verify significant figures (April 14, 2025), ensure enclosed charge is correct.
- **Applications**: Capacitors, shielding, particle accelerators.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of Gauss’s law, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/gauss-law/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make Gauss’s law engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing Gaussian surfaces and flux coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*