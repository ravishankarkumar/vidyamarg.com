---
title: Physics Book - Rotation for JEE & NEET
description: Learn rotational motion for JEE and NEET, covering kinematics, dynamics, torque, angular momentum, and conservation laws, with practice MCQs.
slug: book/physics/rotation
keywords: physics rotational motion, JEE physics torque, NEET physics angular momentum, moment of inertia physics
og:image: https://vidyamarg.com/og-physics-rotation.jpg
---

# Chapter 10: Rotation

Rotational motion describes the dynamics of objects spinning or orbiting, extending the principles of linear motion to angular quantities. This chapter covers rotational kinematics, dynamics (torque and angular momentum), rotational kinetic energy, moment of inertia, and conservation of angular momentum. These concepts are essential for JEE Main, JEE Advanced, and NEET, appearing in problems involving rotating wheels, pendulums, and planetary motion. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master rotational dynamics in competitive exams, ensuring precision and conceptual clarity.

## 10.1 Rotational Kinematics

Rotational kinematics describes angular motion using quantities like angular displacement (\( \theta \), radians), angular velocity (\( \omega \), rad/s), and angular acceleration (\( \alpha \), rad/s²). Key equations, analogous to linear kinematics, are:
- \( \omega = \omega_0 + \alpha t \)
- \( \theta = \theta_0 + \omega_0 t + \frac{1}{2} \alpha t^2 \)
- \( \omega^2 = \omega_0^2 + 2 \alpha (\theta - \theta_0) \)
Linear and angular quantities are related via radius \( r \): \( v = r \omega \), \( a_t = r \alpha \) (tangential acceleration). JEE/NEET problems often involve rotating objects like wheels or flywheels.

**Solved Example**: A JEE Main problem involves a wheel starting from rest with \( \alpha = 2 \, \text{rad/s}^2 \) for 5 s. Calculate the angular velocity.
- **Solution**: Use \( \omega = \omega_0 + \alpha t \). Given \( \omega_0 = 0 \), \( \alpha = 2 \, \text{rad/s}^2 \), \( t = 5 \, \text{s} \): \( \omega = 0 + 2 \times 5 = 10 \, \text{rad/s} \) (2 significant figures, April 14, 2025). This is a standard JEE kinematics question.

**Solved Example**: A NEET problem involves a fan rotating at 20 rad/s, slowing to 10 rad/s in 4 s. Calculate the angular acceleration.
- **Solution**: Use \( \alpha = \frac{\omega - \omega_0}{t} \). Given \( \omega_0 = 20 \, \text{rad/s} \), \( \omega = 10 \, \text{rad/s} \), \( t = 4 \, \text{s} \): \( \alpha = \frac{10 - 20}{4} = \frac{-10}{4} = -2.5 \, \text{rad/s}^2 \) (2 significant figures). Negative indicates deceleration, common in NEET problems.

## 10.2 Rotational Dynamics: Torque and Angular Momentum

### Torque
Torque (\( \vec{\tau} \)) is the rotational equivalent of force, causing angular acceleration: \( \vec{\tau} = \vec{r} \times \vec{F} = r F \sin\theta \), measured in N·m. The net torque causes angular acceleration: \( \sum \vec{\tau} = I \vec{\alpha} \), where \( I \) is the moment of inertia (kg·m²). JEE/NEET problems involve torques in systems like seesaws or pulleys.

**Solved Example**: A JEE Advanced problem involves a 0.5 m rod with a 2 kg mass at one end, pivoted at the other, with a 10 N force at 30° to the rod. Calculate the torque.
- **Solution**: Torque \( \tau = r F \sin\theta \). Given \( r = 0.5 \, \text{m} \), \( F = 10 \, \text{N} \), \( \theta = 30^\circ \): \( \tau = 0.5 \times 10 \times \sin 30^\circ = 0.5 \times 10 \times 0.5 = 2.5 \, \text{N·m} \) (2 significant figures). This is a typical JEE torque calculation.

### Angular Momentum
Angular momentum (\( \vec{L} \)) is the rotational analog of linear momentum: \( \vec{L} = \vec{r} \times \vec{p} = I \vec{\omega} \), measured in kg·m²/s. The rate of change of angular momentum equals torque: \( \sum \vec{\tau} = \frac{d\vec{L}}{dt} \). NEET problems often involve angular momentum in spinning objects.

**Solved Example**: A NEET problem involves a 2 kg disk (radius 0.2 m) spinning at 5 rad/s. Calculate the angular momentum (\( I = \frac{1}{2} m r^2 \)).
- **Solution**: Moment of inertia \( I = \frac{1}{2} m r^2 = \frac{1}{2} \times 2 \times 0.2^2 = 0.04 \, \text{kg·m}^2 \). Angular momentum \( L = I \omega = 0.04 \times 5 = 0.2 \, \text{kg·m}^2/\text{s} \) (2 significant figures). This is a common NEET problem.

## 10.3 Rotational Kinetic Energy and Moment of Inertia

Rotational kinetic energy is \( K = \frac{1}{2} I \omega^2 \), analogous to \( \frac{1}{2} m v^2 \), measured in joules. The moment of inertia \( I = \sum m_i r_i^2 \) depends on mass distribution relative to the rotation axis (e.g., \( I = \frac{1}{2} m r^2 \) for a disk). JEE/NEET problems involve calculating \( I \) for objects like rods or disks and energy in rolling motion. *University Physics* highlights applications in wind turbines, tested in JEE Advanced.

**Solved Example**: A JEE Main problem involves a 3 kg rod (length 1 m) rotating about one end at 4 rad/s (\( I = \frac{1}{3} m l^2 \)). Calculate the rotational kinetic energy.
- **Solution**: Moment of inertia \( I = \frac{1}{3} m l^2 = \frac{1}{3} \times 3 \times 1^2 = 1 \, \text{kg·m}^2 \). Kinetic energy \( K = \frac{1}{2} I \omega^2 = \frac{1}{2} \times 1 \times 4^2 = \frac{1}{2} \times 16 = 8 \, \text{J} \) (2 significant figures). This is a standard JEE energy question.

**Solved Example**: A NEET problem involves a 0.5 kg sphere (radius 0.1 m) rolling at 10 rad/s (\( I = \frac{2}{5} m r^2 \)). Calculate the rotational kinetic energy.
- **Solution**: Moment of inertia \( I = \frac{2}{5} m r^2 = \frac{2}{5} \times 0.5 \times 0.1^2 = 0.002 \, \text{kg·m}^2 \). Kinetic energy \( K = \frac{1}{2} I \omega^2 = \frac{1}{2} \times 0.002 \times 10^2 = 0.1 \, \text{J} \) (2 significant figures). This is a typical NEET rolling problem.

## 10.4 Conservation of Angular Momentum

The conservation of angular momentum states that if no net external torque acts (\( \sum \vec{\tau}_{\text{ext}} = 0 \)), angular momentum is conserved: \( \vec{L}_i = \vec{L}_f \), or \( I_i \omega_i = I_f \omega_f \). JEE/NEET problems involve scenarios like spinning skaters or collapsing stars, where changing \( I \) affects \( \omega \). *University Physics* notes applications in planetary orbits.

**Solved Example**: A JEE Advanced problem involves a 60 kg skater spinning at 2 rad/s with arms extended (\( I = 2.5 \, \text{kg·m}^2 \)). Pulling arms in reduces \( I \) to 1.5 kg·m². Calculate the final angular velocity.
- **Solution**: Conservation of angular momentum: \( I_i \omega_i = I_f \omega_f \). Given \( I_i = 2.5 \, \text{kg·m}^2 \), \( \omega_i = 2 \, \text{rad/s} \), \( I_f = 1.5 \, \text{kg·m}^2 \): \( 2.5 \times 2 = 1.5 \times \omega_f \), \( \omega_f = \frac{5}{1.5} \approx 3.33 \, \text{rad/s} \approx 3.3 \, \text{rad/s} \) (2 significant figures). This is a classic JEE conservation problem.

**Solved Example**: A NEET problem involves a 0.2 kg disk (radius 0.1 m) spinning at 10 rad/s, catching a 0.1 kg mass at the edge, reducing \( \omega \). Calculate the final angular velocity (\( I_{\text{disk}} = \frac{1}{2} m r^2 \)).
- **Solution**: Initial moment of inertia \( I_i = \frac{1}{2} \times 0.2 \times 0.1^2 = 0.001 \, \text{kg·m}^2 \). Initial angular momentum \( L_i = I_i \omega_i = 0.001 \times 10 = 0.01 \, \text{kg·m}^2/\text{s} \). Final moment of inertia: disk + mass at edge (\( I_{\text{mass}} = m r^2 = 0.1 \times 0.1^2 = 0.001 \, \text{kg·m}^2 \)), so \( I_f = 0.001 + 0.001 = 0.002 \, \text{kg·m}^2 \). Conservation: \( I_i \omega_i = I_f \omega_f \), \( 0.01 = 0.002 \times \omega_f \), \( \omega_f = \frac{0.01}{0.002} = 5 \, \text{rad/s} \) (2 significant figures). This is a common NEET problem.

## Review & Summary
- **Rotational Kinematics**: Describes angular motion with \( \theta \), \( \omega \), \( \alpha \); equations mirror linear kinematics (e.g., \( \omega = \omega_0 + \alpha t \)).
- **Torque**: \( \vec{\tau} = \vec{r} \times \vec{F} \), causes angular acceleration (\( \sum \vec{\tau} = I \vec{\alpha} \)).
- **Angular Momentum**: \( \vec{L} = I \vec{\omega} \), changes with torque (\( \sum \vec{\tau} = \frac{d\vec{L}}{dt} \)).
- **Rotational Kinetic Energy**: \( K = \frac{1}{2} I \omega^2 \); moment of inertia \( I = \sum m_i r_i^2 \) depends on mass distribution.
- **Conservation of Angular Momentum**: \( I_i \omega_i = I_f \omega_f \) when no external torque acts.

## Quick Revision Section
- **Key Equations**:
  - Kinematics: \( \omega = \omega_0 + \alpha t \), \( \theta = \theta_0 + \omega_0 t + \frac{1}{2} \alpha t^2 \)
  - Torque: \( \tau = r F \sin\theta \), \( \sum \tau = I \alpha \)
  - Angular momentum: \( L = I \omega \)
  - Rotational kinetic energy: \( K = \frac{1}{2} I \omega^2 \)
  - Conservation: \( I_i \omega_i = I_f \omega_f \)
- **SI Units**: Torque (N·m), angular momentum (kg·m²/s), moment of inertia (kg·m²), energy (J).
- **JEE/NEET Tips**: Use radian units, calculate \( I \) for specific axes, apply significant figures (April 14, 2025), check torque directions, practice rolling and conservation problems.
- **Applications**: Wheels, pendulums, turbines, orbits.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs to test your understanding of rotational motion, covering kinematics, dynamics, and conservation laws.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/rotation/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make rotational motion concepts accessible for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing torque and angular momentum coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*