---
title: Physics Book - Maxwell’s Equations; Magnetism of Matter for JEE & NEET
description: Learn Maxwell’s equations and magnetism of matter for JEE and NEET, covering field unification, displacement current, magnetization, and ferromagnetism, with practice MCQs.
slug: book/physics/maxwells-equations
keywords: physics Maxwell’s equations, JEE physics displacement current, NEET physics ferromagnetism, electromagnetism
og:image: https://vidyamarg.com/og-physics-maxwells-equations.jpg
---

# Chapter 32: Maxwell’s Equations; Magnetism of Matter

Maxwell’s equations unify electricity and magnetism, describing all electromagnetic phenomena, while the magnetism of matter explains material responses to magnetic fields. This chapter explores Maxwell’s equations in integral and differential forms, displacement current and the Ampère-Maxwell law, magnetization and magnetic susceptibility, and ferromagnetism and hysteresis. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on field calculations, material properties, and applications. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master these topics in competitive exams, ensuring precision and conceptual clarity.

## 32.1 Maxwell’s Equations in Integral and Differential Forms

**Maxwell’s equations** describe electromagnetic fields:
1. **Gauss’s law (electric)**: \( \oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\epsilon_0} \) (\( \nabla \cdot \vec{E} = \frac{\rho}{\epsilon_0} \)).
2. **Gauss’s law (magnetic)**: \( \oint \vec{B} \cdot d\vec{A} = 0 \) (\( \nabla \cdot \vec{B} = 0 \)).
3. **Faraday’s law**: \( \oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} \) (\( \nabla \times \vec{E} = -\frac{\partial \vec{B}}{\partial t} \)).
4. **Ampère-Maxwell law**: \( \oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}} + \mu_0 \epsilon_0 \frac{d\Phi_E}{dt} \) (\( \nabla \times \vec{B} = \mu_0 \vec{J} + \mu_0 \epsilon_0 \frac{\partial \vec{E}}{\partial t} \)).
JEE/NEET problems involve applying these equations to fields or circuits. *Fundamentals of Physics* emphasizes their symmetry and unification.

**Solved Example**: A JEE Main problem involves a parallel-plate capacitor with plates of area 0.01 m², separation 0.001 m, charging at 2 A/s. Calculate the displacement current.
- **Solution**: Displacement current: \( I_d = \epsilon_0 \frac{d\Phi_E}{dt} \). Electric field: \( E = \frac{\sigma}{\epsilon_0} = \frac{Q}{\epsilon_0 A} \). Flux: \( \Phi_E = E A = \frac{Q}{\epsilon_0} \). Rate: \( \frac{d\Phi_E}{dt} = \frac{1}{\epsilon_0} \frac{dQ}{dt} = \frac{I}{\epsilon_0} \). Given \( I = 2 \, \text{A} \), \( \epsilon_0 = 8.854 \times 10^{-12} \, \text{C}^2/\text{N·m}^2 \): \( I_d = \epsilon_0 \frac{I}{\epsilon_0} = I = 2 \, \text{A} \). This is a standard JEE displacement current problem.
  - **JEE Tip**: Displacement current equals conduction current; simplify units. Common error: Incorrect flux derivative.

**Solved Example**: A NEET problem asks which Maxwell’s equation describes magnetic field divergence.
- **Solution**: Gauss’s law for magnetism, \( \oint \vec{B} \cdot d\vec{A} = 0 \) (\( \nabla \cdot \vec{B} = 0 \)), states magnetic field has zero divergence (no magnetic monopoles). Option (a) “Gauss’s law (magnetic)” is correct. This is a typical NEET Maxwell’s equation problem.
  - **NEET Tip**: Recall divergence properties; distinguish electric and magnetic laws. Common error: Confusing with electric field.

## 32.2 Displacement Current and Ampère-Maxwell Law

**Displacement current** accounts for changing electric fields in Ampère’s law: \( I_d = \epsilon_0 \frac{d\Phi_E}{dt} \). The **Ampère-Maxwell law** is \( \oint \vec{B} \cdot d\vec{l} = \mu_0 (I_{\text{enc}} + I_d) \), ensuring consistency in capacitors. JEE/NEET problems involve calculating magnetic fields or currents. *University Physics* highlights displacement current’s role in wave propagation.

**Solved Example**: A JEE Advanced problem involves a capacitor with plates of area 0.02 m², separation 0.002 m, electric field changing at \( 10^{11} \, \text{V/m·s} \). Calculate the displacement current.
- **Solution**: Displacement current: \( I_d = \epsilon_0 \frac{d\Phi_E}{dt} \). Flux: \( \Phi_E = E A \). Rate: \( \frac{d\Phi_E}{dt} = A \frac{dE}{dt} \). Given \( A = 0.02 \, \text{m}^2 \), \( \frac{dE}{dt} = 10^{11} \, \text{V/m·s} \): \( \frac{d\Phi_E}{dt} = 0.02 \times 10^{11} = 2 \times 10^9 \, \text{V·m/s} \). \( I_d = 8.854 \times 10^{-12} \times 2 \times 10^9 \approx 1.771 \times 10^{-2} \, \text{A} \approx 0.0177 \, \text{A} \). This is a classic JEE displacement current problem.
  - **JEE Tip**: Use area and field rate; check units. Common error: Omitting \( \epsilon_0 \).

**Solved Example**: A NEET problem asks the role of displacement current in the Ampère-Maxwell law.
- **Solution**: Displacement current accounts for **changing electric fields**, ensuring the magnetic field is consistent in regions like capacitors. Option (a) “Accounts for changing electric fields” is correct. This is a typical NEET Ampère-Maxwell problem.
  - **NEET Tip**: Displacement current completes Ampère’s law; relate to capacitors. Common error: Assuming conduction current.

## 32.3 Magnetization and Magnetic Susceptibility

**Magnetization** (\( \vec{M} \)) is the magnetic moment per unit volume, related to the magnetic field by \( \vec{B} = \mu_0 (\vec{H} + \vec{M}) \), where \( \vec{H} \) is the auxiliary field. **Magnetic susceptibility** (\( \chi_m \)) is defined by \( \vec{M} = \chi_m \vec{H} \). JEE/NEET problems involve calculating magnetization or susceptibility. *Fundamentals of Physics* connects magnetization to material properties.

**Solved Example**: A JEE Main problem involves a material with susceptibility \( \chi_m = 0.02 \) in a magnetic field \( B = 0.1 \, \text{T} \). Calculate the magnetization.
- **Solution**: Magnetization: \( \vec{M} = \chi_m \vec{H} \). Field: \( B = \mu_0 H \), so \( H = \frac{B}{\mu_0} \). Given \( B = 0.1 \, \text{T} \), \( \mu_0 = 4\pi \times 10^{-7} \, \text{T·m/A} \): \( H = \frac{0.1}{4\pi \times 10^{-7}} \approx 7.958 \times 10^4 \, \text{A/m} \). \( M = 0.02 \times 7.958 \times 10^4 \approx 1.592 \times 10^3 \, \text{A/m} \approx 1.59 \times 10^3 \, \text{A/m} \). This is a standard JEE magnetization problem.
  - **JEE Tip**: Convert \( B \) to \( H \); multiply by \( \chi_m \). Common error: Using \( B \) directly.

**Solved Example**: A NEET problem asks the unit of magnetic susceptibility.
- **Solution**: Susceptibility \( \chi_m = \frac{M}{H} \) is **dimensionless**, as both \( M \) and \( H \) have units A/m. Option (a) “Dimensionless” is correct. This is a typical NEET unit problem.
  - **NEET Tip**: Check units of \( M \) and \( H \); confirm dimensionless. Common error: Assuming units like tesla.

## 32.4 Ferromagnetism and Hysteresis

**Ferromagnetic materials** (e.g., iron) exhibit strong magnetization due to domain alignment. **Hysteresis** describes the lagging of magnetization behind the applied field, shown in a \( B \)-$ H $ loop, with coercivity and remanence. JEE/NEET problems involve analyzing hysteresis or magnetic properties. *University Physics* connects ferromagnetism to permanent magnets.

**Solved Example**: A JEE Advanced problem involves a ferromagnetic material with saturation magnetization \( M_s = 1.5 \times 10^6 \, \text{A/m} \) and susceptibility \( \chi_m = 1000 \) at low fields. Calculate the maximum magnetic field inside at low fields.
- **Solution**: At low fields, \( M = \chi_m H \). Maximum \( M = M_s \), so \( H = \frac{M_s}{\chi_m} = \frac{1.5 \times 10^6}{1000} = 1.5 \times 10^3 \, \text{A/m} \). Field: \( B = \mu_0 (H + M) \approx \mu_0 M_s \) (since \( M_s \gg H \)): \( B \approx 4\pi \times 10^{-7} \times 1.5 \times 10^6 \approx 1.885 \, \text{T} \approx 1.89 \, \text{T} \). This is a classic JEE ferromagnetism problem.
  - **JEE Tip**: Use saturation for max field; approximate with \( M_s \). Common error: Including large \( H \).

**Solved Example**: A NEET problem asks the characteristic of a ferromagnetic hysteresis loop.
- **Solution**: A hysteresis loop shows **lagging magnetization**, with non-zero coercivity and remanence, indicating energy loss. Option (a) “Lagging magnetization” is correct. This is a typical NEET hysteresis problem.
  - **NEET Tip**: Hysteresis indicates irreversibility; focus on loop shape. Common error: Assuming linear response.

## Review & Summary
- **Maxwell’s Equations**: Gauss (electric/magnetic), Faraday, Ampère-Maxwell unify fields.
- **Displacement Current**: \( I_d = \epsilon_0 \frac{d\Phi_E}{dt} \); completes Ampère’s law.
- **Magnetization**: \( \vec{M} = \chi_m \vec{H} \); \( \vec{B} = \mu_0 (\vec{H} + \vec{M}) \).
- **Ferromagnetism**: Strong magnetization; hysteresis shows coercivity, remanence.

## Quick Revision Section
- **Key Equations**:
  - Gauss (electric): \( \oint \vec{E} \cdot d\vec{A} = \frac{Q_{\text{enc}}}{\epsilon_0} \)
  - Faraday: \( \oint \vec{E} \cdot d\vec{l} = -\frac{d\Phi_B}{dt} \)
  - Ampère-Maxwell: \( \oint \vec{B} \cdot d\vec{l} = \mu_0 (I_{\text{enc}} + \epsilon_0 \frac{d\Phi_E}{dt}) \)
  - Magnetization: \( \vec{M} = \chi_m \vec{H} \)
- **SI Units**: Electric field (V/m), magnetic field (T), current (A), susceptibility (dimensionless).
- **JEE/NEET Tips**: Apply Maxwell’s equations to symmetry, verify significant figures (April 14, 2025), sketch hysteresis loops, distinguish \( \vec{H} \) and \( \vec{B} \).
- **Applications**: Electromagnetic waves, MRI, permanent magnets.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of Maxwell’s equations and magnetism, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/maxwells-equations/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make Maxwell’s equations and magnetism engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing Maxwell’s equations and hysteresis loops coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*