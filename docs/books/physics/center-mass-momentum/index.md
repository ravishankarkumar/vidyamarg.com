---
title: Physics Book - Center of Mass and Linear Momentum for JEE & NEET
description: Learn center of mass and linear momentum for JEE and NEET, covering momentum conservation, collisions, and system dynamics, with practice MCQs.
slug: book/physics/center-mass-momentum
keywords: physics center of mass, JEE physics linear momentum, NEET physics collisions, momentum conservation physics
og:image: https://vidyamarg.com/og-physics-center-mass-momentum.jpg
---

# Chapter 9: Center of Mass and Linear Momentum

Center of mass and linear momentum are fundamental concepts in mechanics, describing how systems move and interact under forces. This chapter explores the center of mass, linear momentum, conservation of linear momentum, and elastic and inelastic collisions. These principles are critical for JEE Main, JEE Advanced, and NEET, appearing in problems involving colliding objects, multi-particle systems, and rocket motion. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master momentum-based problems in competitive exams, ensuring precision and conceptual clarity.

## 9.1 Center of Mass

The **center of mass** (COM) is the point where a system’s mass is effectively concentrated, behaving as if all external forces act at that point. For a system of particles, the COM position vector is:
\[ \vec{r}_{\text{COM}} = \frac{\sum m_i \vec{r}_i}{\sum m_i} \]
where \( m_i \) is the mass of particle \( i \), \( \vec{r}_i \) is its position, and \( \sum m_i \) is the total mass. In continuous objects, it’s calculated via integration. JEE/NEET problems often involve finding the COM of systems like rods, disks, or multi-object setups.

**Solved Example**: A JEE Main problem involves two masses, 2 kg at \( (1, 0) \, \text{m} \) and 3 kg at \( (0, 2) \, \text{m} \). Calculate the COM coordinates.
- **Solution**: Total mass \( M = 2 + 3 = 5 \, \text{kg} \). \( x_{\text{COM}} = \frac{\sum m_i x_i}{M} = \frac{(2 \times 1) + (3 \times 0)}{5} = \frac{2}{5} = 0.4 \, \text{m} \). \( y_{\text{COM}} = \frac{\sum m_i y_i}{M} = \frac{(2 \times 0) + (3 \times 2)}{5} = \frac{6}{5} = 1.2 \, \text{m} \). COM = \( (0.4, 1.2) \, \text{m} \) (2 significant figures, April 14, 2025). This is a standard JEE numerical.

**Solved Example**: A NEET problem involves a uniform rod of mass 4 kg and length 2 m lying along the x-axis from \( x = 0 \) to \( x = 2 \, \text{m} \). Find the COM.
- **Solution**: For a uniform rod, the COM is at the midpoint. Length = 2 m, so COM at \( x = \frac{2}{2} = 1 \, \text{m} \). COM = \( (1, 0) \, \text{m} \) (2 significant figures). This is a typical NEET conceptual question.

## 9.2 Linear Momentum

Linear momentum is a vector quantity, defined as \( \vec{p} = m \vec{v} \), where \( m \) is mass (kg) and \( \vec{v} \) is velocity (m/s), measured in kg·m/s. It quantifies an object’s “quantity of motion.” The net momentum of a system is the vector sum of individual momenta. Newton’s second law can be written as \( \sum \vec{F} = \frac{d\vec{p}}{dt} \). JEE/NEET problems often involve calculating momentum or its changes in dynamic systems.

**Solved Example**: A JEE Advanced problem involves a 0.2 kg ball moving at 15 m/s east. Calculate its momentum.
- **Solution**: \( \vec{p} = m \vec{v} = 0.2 \times 15 = 3 \, \text{kg·m/s} \) east (2 significant figures). This is a straightforward JEE numerical.

**Solved Example**: A NEET problem involves a 5 kg object moving at 4 m/s north, then 2 m/s south. Calculate the change in momentum.
- **Solution**: Initial \( \vec{p}_i = 5 \times 4 = 20 \, \text{kg·m/s} \) north. Final \( \vec{p}_f = 5 \times (-2) = -10 \, \text{kg·m/s} \) (south negative). Change \( \Delta \vec{p} = \vec{p}_f - \vec{p}_i = -10 - 20 = -30 \, \text{kg·m/s} \) (30 kg·m/s south, 2 significant figures). This is a common NEET vector problem.

## 9.3 Conservation of Linear Momentum

The conservation of linear momentum states that the total momentum of an isolated system (no external forces or \( \sum \vec{F}_{\text{ext}} = 0 \)) is constant: \( \vec{p}_{\text{total, initial}} = \vec{p}_{\text{total, final}} \). This applies to collisions or explosions. JEE/NEET problems use this to analyze systems like colliding carts or rocket propulsion, often requiring component analysis (x, y).

**Solved Example**: A JEE Main problem involves a 2 kg cart moving at 3 m/s east colliding with a 3 kg cart at rest, sticking together. Calculate the final velocity.
- **Solution**: Initial momentum: \( \vec{p}_i = (2 \times 3) + (3 \times 0) = 6 \, \text{kg·m/s} \) east. After collision, total mass = \( 2 + 3 = 5 \, \text{kg} \). By conservation, \( 6 = 5 v_f \), so \( v_f = \frac{6}{5} = 1.2 \, \text{m/s} \) east (2 significant figures). This is a typical JEE inelastic collision problem.

**Solved Example**: A NEET problem involves a 0.1 kg bullet moving at 200 m/s east embedding in a 1.9 kg block at rest. Calculate the final velocity.
- **Solution**: Initial momentum: \( \vec{p}_i = (0.1 \times 200) + (1.9 \times 0) = 20 \, \text{kg·m/s} \) east. Total mass = \( 0.1 + 1.9 = 2 \, \text{kg} \). \( 20 = 2 v_f \), \( v_f = 10 \, \text{m/s} \) east (2 significant figures). This is a common NEET collision question.

## 9.4 Collisions (Elastic and Inelastic)

Collisions are classified as:
- **Elastic**: Both momentum and kinetic energy are conserved (\( \vec{p}_i = \vec{p}_f \), \( K_i = K_f \)).
- **Inelastic**: Momentum is conserved, but kinetic energy is not; perfectly inelastic collisions result in objects sticking together.

The coefficient of restitution (\( e \)) measures elasticity: \( e = \frac{v_{2f} - v_{1f}}{v_{1i} - v_{2i}} \), where \( e = 1 \) (elastic), \( e = 0 \) (perfectly inelastic). JEE/NEET problems involve solving for velocities or energy loss in collisions, often using conservation laws and component analysis.

**Solved Example**: A JEE Advanced problem involves a 1 kg ball at 4 m/s colliding elastically with a 2 kg ball at rest. Calculate the final velocities.
- **Solution**: Momentum conservation: \( 1 \times 4 + 2 \times 0 = 1 \times v_{1f} + 2 \times v_{2f} \), so \( 4 = v_{1f} + 2 v_{2f} \). Kinetic energy conservation: \( \frac{1}{2} \times 1 \times 4^2 = \frac{1}{2} \times 1 \times v_{1f}^2 + \frac{1}{2} \times 2 \times v_{2f}^2 \), so \( 8 = \frac{1}{2} v_{1f}^2 + v_{2f}^2 \). Solve: From momentum, \( v_{1f} = 4 - 2 v_{2f} \). Substitute into energy: \( 8 = \frac{1}{2} (4 - 2 v_{2f})^2 + v_{2f}^2 \). Simplify: \( 8 = 2 (4 - 2 v_{2f})^2 + v_{2f}^2 \), \( 16 = (16 - 16 v_{2f} + 4 v_{2f}^2) + v_{2f}^2 \), \( 16 = 16 - 16 v_{2f} + 5 v_{2f}^2 \), \( 5 v_{2f}^2 - 16 v_{2f} = 0 \). \( v_{2f} (5 v_{2f} - 16) = 0 \), so \( v_{2f} = 0 \) or \( v_{2f} = \frac{16}{5} = 3.2 \, \text{m/s} \). If \( v_{2f} = 3.2 \), \( v_{1f} = 4 - 2 \times 3.2 = -2.4 \, \text{m/s} \) (west). Check energy: \( K_i = 8 \, \text{J} \), \( K_f = \frac{1}{2} \times 1 \times (-2.4)^2 + \frac{1}{2} \times 2 \times 3.2^2 = 2.88 + 5.12 = 8 \, \text{J} \). Velocities: \( v_{1f} = -2.4 \, \text{m/s} \), \( v_{2f} = 3.2 \, \text{m/s} \) (2 significant figures). This is a classic JEE elastic collision problem.

**Solved Example**: A NEET problem involves a 0.3 kg ball at 5 m/s colliding inelastically with a 0.7 kg ball at rest (\( e = 0.5 \)). Calculate the final velocities.
- **Solution**: Momentum conservation: \( 0.3 \times 5 + 0.7 \times 0 = (0.3 + 0.7) v_f \). \( 1.5 = 1 \times v_f \), so for perfectly inelastic, \( v_f = 1.5 \, \text{m/s} \). Since \( e = 0.5 \), use restitution: \( e = \frac{v_{2f} - v_{1f}}{v_{1i} - v_{2i}} = 0.5 \). \( v_{1i} = 5 \), \( v_{2i} = 0 \), so \( v_{2f} - v_{1f} = 0.5 \times (5 - 0) = 2.5 \). Momentum: \( 0.3 \times 5 = 0.3 v_{1f} + 0.7 v_{2f} \), \( 1.5 = 0.3 v_{1f} + 0.7 v_{2f} \). Solve: \( v_{2f} = v_{1f} + 2.5 \). Substitute: \( 1.5 = 0.3 v_{1f} + 0.7 (v_{1f} + 2.5) = 0.3 v_{1f} + 0.7 v_{1f} + 1.75 = v_{1f} + 1.75 \). \( v_{1f} = 1.5 - 1.75 = -0.25 \, \text{m/s} \). \( v_{2f} = -0.25 + 2.5 = 2.25 \, \text{m/s} \approx 2.3 \, \text{m/s} \) (2 significant figures). **Answer**: \( v_{1f} \approx -0.25 \, \text{m/s} \), \( v_{2f} \approx 2.3 \, \text{m/s} \). This is a NEET collision problem with restitution.

## Review & Summary
- **Center of Mass**: Point where system mass is concentrated, \( \vec{r}_{\text{COM}} = \frac{\sum m_i \vec{r}_i}{\sum m_i} \).
- **Linear Momentum**: \( \vec{p} = m \vec{v} \), measures motion quantity, related to force via \( \sum \vec{F} = \frac{d\vec{p}}{dt} \).
- **Conservation of Momentum**: Total momentum conserved if \( \sum \vec{F}_{\text{ext}} = 0 \), \( \vec{p}_i = \vec{p}_f \).
- **Collisions**: Elastic (momentum and kinetic energy conserved), inelastic (only momentum conserved); coefficient of restitution \( e \) ranges from 0 to 1.

## Quick Revision Section
- **Key Equations**:
  - Center of mass: \( \vec{r}_{\text{COM}} = \frac{\sum m_i \vec{r}_i}{\sum m_i} \)
  - Linear momentum: \( \vec{p} = m \vec{v} \)
  - Momentum conservation: \( \sum \vec{p}_i = \sum \vec{p}_f \)
  - Elastic collision: \( \vec{p}_i = \vec{p}_f \), \( K_i = K_f \)
  - Coefficient of restitution: \( e = \frac{v_{2f} - v_{1f}}{v_{1i} - v_{2i}} \)
- **SI Units**: Momentum (kg·m/s), energy (J, kg·m²/s²).
- **JEE/NEET Tips**: Use vector components for momentum, verify conservation conditions, apply significant figures (April 14, 2025), practice collision problems with restitution, ensure FBDs for COM motion (April 17, 2025).
- **Applications**: Collisions, rocket propulsion, multi-particle systems.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs to test your understanding of center of mass and linear momentum, covering momentum conservation, collisions, and system dynamics.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/center-mass-momentum/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make center of mass and momentum concepts accessible for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing collision dynamics coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*