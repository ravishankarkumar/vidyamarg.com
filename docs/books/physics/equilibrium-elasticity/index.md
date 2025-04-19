---
title: Physics Book - Equilibrium and Elasticity for JEE & NEET
description: Learn equilibrium and elasticity for JEE and NEET, covering static equilibrium, center of gravity, stress, strain, and Hooke’s law, with practice MCQs.
slug: book/physics/equilibrium-elasticity
keywords: physics equilibrium, JEE physics statics, NEET physics elasticity, Hooke’s law physics
og:image: https://vidyamarg.com/og-physics-equilibrium-elasticity.jpg
---

# Chapter 12: Equilibrium and Elasticity

Equilibrium and elasticity describe how objects maintain balance under forces and how materials deform under stress. This chapter covers the conditions for static equilibrium, center of gravity and stability, elastic properties of materials, and stress, strain, and Hooke’s law. These concepts are essential for JEE Main, JEE Advanced, and NEET, appearing in problems involving balanced beams, stable structures, and material deformation. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master these topics in competitive exams, ensuring precision and conceptual clarity.

## 12.1 Conditions for Equilibrium

An object is in **static equilibrium** when it is at rest with no net force or torque acting on it. The conditions are:
- **Translational equilibrium**: Sum of forces is zero, \( \sum \vec{F} = 0 \).
- **Rotational equilibrium**: Sum of torques about any point is zero, \( \sum \vec{\tau} = 0 \).
Forces and torques must balance in all directions (x, y, z). JEE/NEET problems often involve beams, ladders, or suspended objects. *Fundamentals of Physics* emphasizes solving equilibrium using free-body diagrams.

**Solved Example**: A JEE Main problem involves a 10 kg uniform beam (length 2 m) supported by two vertical ropes at its ends, with a 5 kg mass at 0.5 m from the left end. Calculate the tension in the left rope.
- **Solution**: Forces: beam weight \( W_b = 10 \times 9.8 = 98 \, \text{N} \) at 1 m, mass weight \( W_m = 5 \times 9.8 = 49 \, \text{N} \) at 0.5 m, tensions \( T_1 \) (left), \( T_2 \) (right). Translational equilibrium (y-direction): \( T_1 + T_2 - 98 - 49 = 0 \), so \( T_1 + T_2 = 147 \, \text{N} \). Rotational equilibrium about the left end: clockwise torques (beam: \( 98 \times 1 \), mass: \( 49 \times 0.5 \)), counterclockwise torque (\( T_2 \times 2 \)). Sum torques: \( -(98 \times 1) - (49 \times 0.5) + (T_2 \times 2) = 0 \), \( -98 - 24.5 + 2 T_2 = 0 \), \( 2 T_2 = 122.5 \), \( T_2 = 61.25 \, \text{N} \). Then, \( T_1 = 147 - 61.25 = 85.75 \, \text{N} \approx 86 \, \text{N} \) (2 significant figures, April 14, 2025). This is a standard JEE equilibrium problem.

**Solved Example**: A NEET problem involves a 60 kg person standing 1 m from the pivot of a seesaw (length 3 m). Calculate the force needed at the other end to balance it.
- **Solution**: Person’s weight: \( W = 60 \times 9.8 = 588 \, \text{N} \). Torque about pivot: \( \tau_1 = 588 \times 1 = 588 \, \text{N·m} \) (clockwise). For equilibrium, counterclockwise torque from force \( F \) at 2 m (other end): \( \tau_2 = F \times 2 \). Set \( \tau_1 = \tau_2 \): \( 588 = 2 F \), \( F = \frac{588}{2} = 294 \, \text{N} \approx 290 \, \text{N} \) (2 significant figures). This is a typical NEET seesaw problem.

## 12.2 Center of Gravity and Stability

The **center of gravity (CG)** is the point where the weight of an object can be considered to act, calculated as \( \vec{r}_{\text{CG}} = \frac{\sum m_i \vec{r}_i}{\sum m_i} \). An object is stable if its CG remains over its base of support. Stability depends on CG height and base width; lower CG and wider base increase stability. JEE/NEET problems involve tipping points or equilibrium on inclines. *University Physics* highlights applications in vehicle design, tested in JEE Advanced.

**Solved Example**: A JEE Advanced problem involves a 20 kg rectangular block (height 1 m, base width 0.4 m) on a horizontal surface. Calculate the maximum angle of tilt before tipping.
- **Solution**: CG is at the geometric center (0.5 m height, 0.2 m from edges). Tipping occurs when the CG’s vertical projection falls outside the base. For tilt about the base edge, the CG’s horizontal displacement is \( x = 0.2 \sin\theta \), where \( \theta \) is the tilt angle. Tipping when \( x = 0.2 \): \( 0.2 \sin\theta = 0.2 \), \( \sin\theta = 1 \), but limited by geometry. Instead, use the angle where CG aligns over the pivot: \( \tan\theta = \frac{\text{base width}/2}{\text{height}/2} = \frac{0.2}{0.5} = 0.4 \), so \( \theta = \tan^{-1}(0.4) \approx 21.8^\circ \approx 22^\circ \) (2 significant figures). This is a classic JEE stability problem.

**Solved Example**: A NEET problem involves a 50 kg uniform ladder (length 5 m) leaning at 60° against a wall. Calculate the CG’s height.
- **Solution**: CG is at the ladder’s midpoint (2.5 m along length). Vertical height: \( h = 2.5 \sin 60^\circ = 2.5 \times \frac{\sqrt{3}}{2} \approx 2.5 \times 0.866 = 2.165 \, \text{m} \approx 2.2 \, \text{m} \) (2 significant figures). This is a common NEET ladder problem.

## 12.3 Elastic Properties of Materials

Materials deform under forces but return to their original shape if the deformation is elastic. **Elasticity** describes this ability, governed by Young’s modulus (\( E \)), shear modulus, and bulk modulus. Stress (force per unit area) causes strain (fractional deformation). JEE/NEET problems involve stretching wires or compressing solids. *University Physics* notes applications in biomechanics, tested in NEET.

**Solved Example**: A JEE Main problem involves a steel wire (Young’s modulus \( E = 2 \times 10^{11} \, \text{N/m}^2 \), cross-sectional area \( 1 \, \text{mm}^2 = 10^{-6} \, \text{m}^2 \)) stretched by 0.1 mm under a 100 N force. Calculate the original length.
- **Solution**: Young’s modulus: \( E = \frac{\text{stress}}{\text{strain}} = \frac{F/A}{\Delta L / L} \), where \( F = 100 \, \text{N} \), \( A = 10^{-6} \, \text{m}^2 \), \( \Delta L = 0.1 \times 10^{-3} = 10^{-4} \, \text{m} \). Stress: \( \frac{F}{A} = \frac{100}{10^{-6}} = 10^8 \, \text{N/m}^2 \). Strain: \( \frac{\Delta L}{L} = \frac{10^{-4}}{L} \). Thus, \( E = \frac{10^8}{\frac{10^{-4}}{L}} = \frac{10^8 \cdot L}{10^{-4}} = 10^{12} L \). Given \( E = 2 \times 10^{11} \, \text{N/m}^2 \): \( 10^{12} L = 2 \times 10^{11} \), \( L = \frac{2 \times 10^{11}}{10^{12}} = 0.2 \, \text{m} \approx 20 \, \text{cm} \) (2 significant figures). This is a standard JEE elasticity problem.

**Solved Example**: A NEET problem involves a rubber band (original length 0.5 m) stretched to 0.6 m under a force. If the spring constant is 50 N/m, calculate the force.
- **Solution**: For elastic materials like rubber, approximate as a spring: \( F = k \Delta x \). Extension: \( \Delta x = 0.6 - 0.5 = 0.1 \, \text{m} \). Given \( k = 50 \, \text{N/m} \): \( F = 50 \times 0.1 = 5 \, \text{N} \) (2 significant figures). This is a typical NEET spring problem.

## 12.4 Stress, Strain, and Hooke’s Law

**Stress** is force per unit area (\( \sigma = \frac{F}{A} \), N/m²), and **strain** is fractional deformation (\( \epsilon = \frac{\Delta L}{L} \)). **Hooke’s law** for elastic materials states stress is proportional to strain: \( \sigma = E \epsilon \), where \( E \) is Young’s modulus. For springs, Hooke’s law is \( F = k \Delta x \). JEE/NEET problems involve calculating stress, strain, or moduli for wires, rods, or springs.

**Solved Example**: A JEE Advanced problem involves a copper rod (length 1 m, area 2 mm² = \( 2 \times 10^{-6} \, \text{m}^2 \), \( E = 1.1 \times 10^{11} \, \text{N/m}^2 \)) under 200 N tension. Calculate the elongation.
- **Solution**: Stress: \( \sigma = \frac{F}{A} = \frac{200}{2 \times 10^{-6}} = 10^8 \, \text{N/m}^2 \). Young’s modulus: \( E = \frac{\sigma}{\epsilon} \), so strain \( \epsilon = \frac{\sigma}{E} = \frac{10^8}{1.1 \times 10^{11}} \approx 9.09 \times 10^{-4} \). Elongation: \( \Delta L = \epsilon L = 9.09 \times 10^{-4} \times 1 = 9.09 \times 10^{-4} \, \text{m} = 0.909 \, \text{mm} \approx 0.91 \, \text{mm} \) (2 significant figures). This is a classic JEE stress-strain problem.

**Solved Example**: A NEET problem involves a spring (spring constant 100 N/m) stretched by 0.02 m. Calculate the potential energy stored.
- **Solution**: Potential energy in a spring: \( U = \frac{1}{2} k (\Delta x)^2 \). Given \( k = 100 \, \text{N/m} \), \( \Delta x = 0.02 \, \text{m} \): \( U = \frac{1}{2} \times 100 \times (0.02)^2 = \frac{1}{2} \times 100 \times 0.0004 = 0.02 \, \text{J} \) (2 significant figures). This is a common NEET elasticity problem.

## Review & Summary
- **Equilibrium**: Requires \( \sum \vec{F} = 0 \), \( \sum \vec{\tau} = 0 \); applies to static systems like beams or ladders.
- **Center of Gravity and Stability**: CG determines balance; stability depends on CG height and base width.
- **Elasticity**: Materials deform elastically under stress, returning to shape; governed by moduli.
- **Stress, Strain, Hooke’s Law**: Stress (\( \sigma = \frac{F}{A} \)), strain (\( \epsilon = \frac{\Delta L}{L} \)), \( \sigma = E \epsilon \); springs follow \( F = k \Delta x \).

## Quick Revision Section
- **Key Equations**:
  - Equilibrium: \( \sum \vec{F} = 0 \), \( \sum \vec{\tau} = 0 \)
  - Center of gravity: \( \vec{r}_{\text{CG}} = \frac{\sum m_i \vec{r}_i}{\sum m_i} \)
  - Young’s modulus: \( E = \frac{\sigma}{\epsilon} = \frac{F/A}{\Delta L / L} \)
  - Hooke’s law: \( F = k \Delta x \), \( U = \frac{1}{2} k (\Delta x)^2 \)
- **SI Units**: Force (N), torque (N·m), stress (N/m²), strain (unitless), Young’s modulus (N/m²), spring constant (N/m).
- **JEE/NEET Tips**: Use free-body diagrams, sum torques about a convenient point, verify significant figures (April 14, 2025), check CG position for stability, ensure correct moduli for elasticity problems.
- **Applications**: Bridges, ladders, springs, bones, engineering materials.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of equilibrium and elasticity, with year and paper details for each problem.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/equilibrium-elasticity/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make equilibrium and elasticity concepts accessible for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing equilibrium and stress-strain coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*