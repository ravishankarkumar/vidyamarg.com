---
title: Physics Book - Magnetic Fields Due to Currents for JEE & NEET
description: Learn magnetic fields due to currents for JEE and NEET, covering Biot-Savart law, wire and loop fields, Ampère’s law, and solenoids, with practice MCQs.
slug: book/physics/magnetic-fields-currents
keywords: physics magnetic fields currents, JEE physics Biot-Savart law, NEET physics Ampère’s law, electromagnetism
og:image: https://vidyamarg.com/og-physics-magnetic-fields-currents.jpg
---

# Chapter 29: Magnetic Fields Due to Currents

Magnetic fields produced by electric currents are central to electromagnetism, enabling technologies like motors and transformers. This chapter explores the Biot-Savart law, magnetic fields of straight wires and loops, Ampère’s law and its applications, and magnetic fields in solenoids and toroids. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on field calculations, symmetry, and applications. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master magnetic fields due to currents in competitive exams, ensuring precision and conceptual clarity.

## 29.1 Biot-Savart Law

The **Biot-Savart law** describes the magnetic field produced by a current element: \( d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \hat{r}}{r^2} \), where \( \mu_0 = 4\pi \times 10^{-7} \, \text{T·m/A} \) is the permeability of free space, \( I \) is current, \( d\vec{l} \) is the length element, and \( \hat{r} \) is the unit vector to the point of interest. JEE/NEET problems involve integrating this law for simple configurations. *Fundamentals of Physics* emphasizes its role as the foundation for field calculations.

**Solved Example**: A JEE Main problem involves a long straight wire carrying 8 A. Calculate the magnetic field at 0.05 m from the wire.
- **Solution**: For a straight wire, \( B = \frac{\mu_0 I}{2\pi r} \). Given \( I = 8 \, \text{A} \), \( r = 0.05 \, \text{m} \): \( B = \frac{4\pi \times 10^{-7} \times 8}{2\pi \times 0.05} = \frac{3.2 \times 10^{-6}}{0.1} = 3.2 \times 10^{-5} \, \text{T} \approx 3.20 \times 10^{-5} \, \text{T} \) (3 significant figures, April 14, 2025). This is a standard JEE Biot-Savart problem.
  - **JEE Tip**: Simplify \( \mu_0 / 2\pi \); use right-hand rule for direction. Common error: Incorrect distance units.

**Solved Example**: A NEET problem asks the direction of the magnetic field at a point above a wire with current flowing eastward.
- **Solution**: Using the right-hand rule, point thumb east (current direction); fingers curl north (above wire), indicating the field points **north**. Option (a) “North” is correct. This is a typical NEET direction problem.
  - **NEET Tip**: Apply right-hand rule; visualize field circles. Common error: Reversing direction.

## 29.2 Magnetic Fields of Straight Wires and Loops

For a **long straight wire**, the field is \( B = \frac{\mu_0 I}{2\pi r} \). For a **circular loop** (radius \( R \), current \( I \)), the field at the center is \( B = \frac{\mu_0 I}{2 R} \); along the axis at distance \( x \), \( B = \frac{\mu_0 I R^2}{2 (R^2 + x^2)^{3/2}} \). JEE/NEET problems involve computing fields or combining contributions. *University Physics* highlights symmetry in loop calculations.

**Solved Example**: A JEE Advanced problem involves a circular loop (radius 0.1 m, current 4 A). Calculate the magnetic field at a point 0.1 m along its axis.
- **Solution**: Axial field: \( B = \frac{\mu_0 I R^2}{2 (R^2 + x^2)^{3/2}} \). Given \( I = 4 \, \text{A} \), \( R = 0.1 \, \text{m} \), \( x = 0.1 \, \text{m} \): \( R^2 + x^2 = 0.01 + 0.01 = 0.02 \), \( (R^2 + x^2)^{3/2} = (0.02)^{3/2} \approx 0.002828 \). \( B = \frac{4\pi \times 10^{-7} \times 4 \times 0.01}{2 \times 0.002828} \approx \frac{5.024 \times 10^{-8}}{5.656 \times 10^{-3}} \approx 8.885 \times 10^{-6} \, \text{T} \approx 8.89 \times 10^{-6} \, \text{T} \). This is a classic JEE loop problem.
  - **JEE Tip**: Square radius; compute denominator carefully. Common error: Using center formula.

**Solved Example**: A NEET problem involves a straight wire carrying 10 A. Calculate the magnetic field at 0.02 m.
- **Solution**: Field: \( B = \frac{\mu_0 I}{2\pi r} \). Given \( I = 10 \, \text{A} \), \( r = 0.02 \, \text{m} \): \( B = \frac{4\pi \times 10^{-7} \times 10}{2\pi \times 0.02} = \frac{4 \times 10^{-6}}{0.04} = 10^{-4} \, \text{T} = 1.00 \times 10^{-4} \, \text{T} \). Option (a) “1.00 × 10⁻⁴ T” is correct. This is a typical NEET wire problem.
  - **NEET Tip**: Simplify constants; check units. Common error: Forgetting \( 2\pi \).

## 29.3 Ampère’s Law and Its Applications

**Ampère’s law** states: \( \oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}} \), where \( I_{\text{enc}} \) is the enclosed current. It’s used for symmetric configurations like wires or solenoids. JEE/NEET problems involve applying Ampère’s law to compute fields. *Fundamentals of Physics* emphasizes symmetry for simplifying integrals.

**Solved Example**: A JEE Advanced problem involves a long cylindrical conductor (radius 0.01 m) carrying 20 A uniformly distributed. Calculate the magnetic field at 0.005 m from the center.
- **Solution**: Inside a conductor, \( I_{\text{enc}} = I \left( \frac{r}{R} \right)^2 \). Given \( I = 20 \, \text{A} \), \( r = 0.005 \, \text{m} \), \( R = 0.01 \, \text{m} \): \( I_{\text{enc}} = 20 \times \left( \frac{0.005}{0.01} \right)^2 = 20 \times 0.25 = 5 \, \text{A} \). Ampère’s law: \( B \cdot 2\pi r = \mu_0 I_{\text{enc}} \), \( B = \frac{\mu_0 I_{\text{enc}}}{2\pi r} = \frac{4\pi \times 10^{-7} \times 5}{2\pi \times 0.005} = \frac{2 \times 10^{-6}}{0.01} = 2 \times 10^{-4} \, \text{T} \approx 2.00 \times 10^{-4} \, \text{T} \). This is a classic JEE Ampère’s law problem.
  - **JEE Tip**: Use enclosed current fraction; simplify constants. Common error: Using total current.

**Solved Example**: A NEET problem asks the magnetic field inside a long straight wire with uniform current.
- **Solution**: Ampère’s law shows the field inside a wire is **proportional to radius**, \( B \propto r \), due to enclosed current scaling with \( r^2 \). Option (a) “Proportional to radius” is correct. This is a typical NEET symmetry problem.
  - **NEET Tip**: Recognize linear field inside; use Ampère’s law. Common error: Assuming constant field.

## 29.4 Magnetic Fields in Solenoids and Toroids

A **solenoid** (length \( L \), turns \( N \), current \( I \)) has a uniform field inside: \( B = \mu_0 \frac{N}{L} I \). A **toroid** (radius \( R \), turns \( N \)) has \( B = \frac{\mu_0 N I}{2\pi R} \) inside the core. JEE/NEET problems involve calculating fields or turns. *University Physics* connects solenoids to electromagnetic devices.

**Solved Example**: A JEE Main problem involves a solenoid (length 0.5 m, 1000 turns, current 2 A). Calculate the magnetic field inside.
- **Solution**: Field: \( B = \mu_0 \frac{N}{L} I \). Given \( N = 1000 \), \( L = 0.5 \, \text{m} \), \( I = 2 \, \text{A} \): \( B = 4\pi \times 10^{-7} \times \frac{1000}{0.5} \times 2 = 4\pi \times 10^{-7} \times 2000 \times 2 = 5.024 \times 10^{-3} \, \text{T} \approx 5.02 \times 10^{-3} \, \text{T} \). This is a standard JEE solenoid problem.
  - **JEE Tip**: Compute turns per unit length; check units. Common error: Forgetting \( \mu_0 \).

**Solved Example**: A NEET problem asks the magnetic field inside an ideal solenoid.
- **Solution**: Inside an ideal solenoid, the field is **uniform and non-zero**, given by \( B = \mu_0 \frac{N}{L} I \). Option (a) “Uniform” is correct. This is a typical NEET solenoid problem.
  - **NEET Tip**: Field is uniform inside; zero outside. Common error: Assuming zero inside.

## Review & Summary
- **Biot-Savart**: \( d\vec{B} = \frac{\mu_0}{4\pi} \frac{I d\vec{l} \times \hat{r}}{r^2} \).
- **Wire/Loop**: Wire: \( B = \frac{\mu_0 I}{2\pi r} \); Loop (center): \( B = \frac{\mu_0 I}{2 R} \).
- **Ampère’s Law**: \( \oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}} \).
- **Solenoid/Toroid**: Solenoid: \( B = \mu_0 \frac{N}{L} I \); Toroid: \( B = \frac{\mu_0 N I}{2\pi R} \).

## Quick Revision Section
- **Key Equations**:
  - Biot-Savart (wire): \( B = \frac{\mu_0 I}{2\pi r} \)
  - Loop (center): \( B = \frac{\mu_0 I}{2 R} \)
  - Ampère’s law: \( \oint \vec{B} \cdot d\vec{l} = \mu_0 I_{\text{enc}} \)
  - Solenoid: \( B = \mu_0 \frac{N}{L} I \)
- **SI Units**: Magnetic field (T), current (A), distance (m), turns (dimensionless).
- **JEE/NEET Tips**: Use right-hand rule, verify significant figures (April 14, 2025), exploit symmetry in Ampère’s law, sketch field lines.
- **Applications**: Motors, transformers, magnetic resonance imaging.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of magnetic fields due to currents, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/magnetic-fields-currents/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make magnetic fields due to currents engaging for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing solenoid and toroid field lines coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*