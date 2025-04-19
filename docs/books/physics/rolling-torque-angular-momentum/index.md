---
title: Physics Book - Rolling, Torque, and Angular Momentum for JEE & NEET
description: Learn rolling motion, torque, and angular momentum for JEE and NEET, covering rolling dynamics, torque applications, and conservation laws, with practice MCQs.
slug: book/physics/rolling-torque-angular-momentum
keywords: physics rolling motion, JEE physics torque, NEET physics angular momentum, conservation of angular momentum
og:image: https://vidyamarg.com/og-physics-rolling-torque-angular-momentum.jpg
---

# Chapter 11: Rolling, Torque, and Angular Momentum

Rolling motion, torque, and angular momentum extend rotational dynamics to objects that combine translation and rotation, such as wheels or spinning tops. This chapter explores rolling motion, torque in complex systems, angular momentum in rotating and rolling objects, and conservation of angular momentum. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems involving rolling cylinders, pulley systems, and precessing gyroscopes. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master these topics in competitive exams, ensuring precision and conceptual clarity.

## 11.1 Rolling Motion

Rolling motion combines translational motion of the center of mass (velocity \( v_{\text{CM}} \)) and rotational motion about the center (angular velocity \( \omega \)). For rolling without slipping, the condition is \( v_{\text{CM}} = r \omega \), where \( r \) is the radius. The total kinetic energy is \( K = \frac{1}{2} m v_{\text{CM}}^2 + \frac{1}{2} I \omega^2 \), where \( I \) is the moment of inertia. Static friction provides the torque for rolling without dissipating energy. JEE/NEET problems often involve rolling objects on inclines or surfaces. *University Physics* highlights applications in vehicle dynamics, tested in JEE Advanced.

**Solved Example**: A JEE Main problem involves a 2 kg solid cylinder (radius 0.1 m) rolling without slipping at 5 m/s (\( I = \frac{1}{2} m r^2 \)). Calculate the total kinetic energy.
- **Solution**: Translational kinetic energy: \( K_{\text{trans}} = \frac{1}{2} m v_{\text{CM}}^2 = \frac{1}{2} \times 2 \times 5^2 = 25 \, \text{J} \). For rolling without slipping, \( \omega = \frac{v_{\text{CM}}}{r} = \frac{5}{0.1} = 50 \, \text{rad/s} \). Moment of inertia \( I = \frac{1}{2} m r^2 = \frac{1}{2} \times 2 \times 0.1^2 = 0.01 \, \text{kg·m}^2 \). Rotational kinetic energy: \( K_{\text{rot}} = \frac{1}{2} I \omega^2 = \frac{1}{2} \times 0.01 \times 50^2 = \frac{1}{2} \times 0.01 \times 2500 = 12.5 \, \text{J} \). Total \( K = 25 + 12.5 = 37.5 \, \text{J} \approx 38 \, \text{J} \) (2 significant figures, April 14, 2025). This is a standard JEE rolling problem.

**Solved Example**: A NEET problem involves a 0.5 kg sphere (radius 0.05 m) rolling down an incline at 2 m/s (\( I = \frac{2}{5} m r^2 \)). Calculate the angular velocity.
- **Solution**: For rolling without slipping, \( v_{\text{CM}} = r \omega \). Given \( v_{\text{CM}} = 2 \, \text{m/s} \), \( r = 0.05 \, \text{m} \): \( \omega = \frac{v_{\text{CM}}}{r} = \frac{2}{0.05} = 40 \, \text{rad/s} \) (2 significant figures). This is a typical NEET kinematics question.

## 11.2 Torque

Torque (\( \vec{\tau} = \vec{r} \times \vec{F} \)) causes rotational acceleration (\( \sum \vec{\tau} = I \vec{\alpha} \)), measured in N·m. In complex systems (e.g., pulleys, levers), multiple torques interact, requiring net torque calculations. Friction or applied forces often provide torque in rolling or pulley systems. JEE/NEET problems involve torque balance in equilibrium or dynamic systems like Atwood’s machines.

**Solved Example**: A JEE Advanced problem involves a 0.2 m radius pulley (\( I = 0.05 \, \text{kg·m}^2 \)) with a 1 kg mass and a 0.5 kg mass attached. Calculate the net torque.
- **Solution**: Forces: \( F_1 = m_1 g = 1 \times 9.8 = 9.8 \, \text{N} \), \( F_2 = m_2 g = 0.5 \times 9.8 = 4.9 \, \text{N} \). Torques: \( \tau_1 = F_1 r = 9.8 \times 0.2 = 1.96 \, \text{N·m} \) (clockwise), \( \tau_2 = F_2 r = 4.9 \times 0.2 = 0.98 \, \text{N·m} \) (counterclockwise). Net torque \( \tau_{\text{net}} = \tau_1 - \tau_2 = 1.96 - 0.98 = 0.98 \, \text{N·m} \) (clockwise, 2 significant figures). This is a classic JEE pulley problem.

**Solved Example**: A NEET problem involves a 0.3 m lever with a 10 N force at 45° to the lever arm, pivoted at one end. Calculate the torque.
- **Solution**: Torque \( \tau = r F \sin\theta \). Given \( r = 0.3 \, \text{m} \), \( F = 10 \, \text{N} \), \( \theta = 45^\circ \): \( \tau = 0.3 \times 10 \times \sin 45^\circ = 0.3 \times 10 \times 0.707 \approx 2.12 \, \text{N·m} \approx 2.1 \, \text{N·m} \) (2 significant figures). This is a common NEET torque question.

## 11.3 Angular Momentum

Angular momentum (\( \vec{L} = \vec{r} \times \vec{p} = I \vec{\omega} \)) quantifies rotational motion, measured in kg·m²/s. For rolling objects, angular momentum includes contributions from translation and rotation. The rate of change is \( \sum \vec{\tau} = \frac{d\vec{L}}{dt} \). JEE/NEET problems involve calculating \( \vec{L} \) for systems like spinning disks or rolling spheres, often with precession in advanced cases.

**Solved Example**: A JEE Main problem involves a 1 kg disk (radius 0.2 m) rolling without slipping at 4 m/s (\( I = \frac{1}{2} m r^2 \)). Calculate the angular momentum about the center.
- **Solution**: Moment of inertia \( I = \frac{1}{2} m r^2 = \frac{1}{2} \times 1 \times 0.2^2 = 0.02 \, \text{kg·m}^2 \). Angular velocity \( \omega = \frac{v_{\text{CM}}}{r} = \frac{4}{0.2} = 20 \, \text{rad/s} \). Angular momentum \( L = I \omega = 0.02 \times 20 = 0.4 \, \text{kg·m}^2/\text{s} \) (2 significant figures). This is a standard JEE angular momentum problem.

**Solved Example**: A NEET problem involves a 0.3 kg point mass rotating at 5 rad/s, 0.1 m from the axis. Calculate the angular momentum.
- **Solution**: For a point mass, \( I = m r^2 = 0.3 \times 0.1^2 = 0.003 \, \text{kg·m}^2 \). Angular momentum \( L = I \omega = 0.003 \times 5 = 0.015 \, \text{kg·m}^2/\text{s} \) (2 significant figures). This is a typical NEET point mass question.

## 11.4 Conservation of Angular Momentum

Conservation of angular momentum states that if no net external torque acts (\( \sum \vec{\tau}_{\text{ext}} = 0 \)), angular momentum is conserved: \( \vec{L}_i = \vec{L}_f \), or \( I_i \omega_i = I_f \omega_f \). This applies to systems like spinning skaters, rolling objects, or precessing tops. JEE/NEET problems often involve changing moment of inertia or analyzing precession. *University Physics* notes applications in gyroscopes, tested in JEE Advanced.

**Solved Example**: A JEE Advanced problem involves a 50 kg skater spinning at 3 rad/s (\( I = 2 \, \text{kg·m}^2 \)). Extending arms increases \( I \) to 3 kg·m². Calculate the final angular velocity.
- **Solution**: Conservation of angular momentum: \( I_i \omega_i = I_f \omega_f \). Given \( I_i = 2 \, \text{kg·m}^2 \), \( \omega_i = 3 \, \text{rad/s} \), \( I_f = 3 \, \text{kg·m}^2 \): \( 2 \times 3 = 3 \times \omega_f \), \( \omega_f = \frac{6}{3} = 2 \, \text{rad/s} \) (2 significant figures). This is a classic JEE conservation problem.

**Solved Example**: A NEET problem involves a 0.2 kg disk (radius 0.1 m, \( I = \frac{1}{2} m r^2 \)) spinning at 8 rad/s, catching a 0.1 kg mass at the edge. Calculate the final angular velocity.
- **Solution**: Initial moment of inertia \( I_i = \frac{1}{2} \times 0.2 \times 0.1^2 = 0.001 \, \text{kg·m}^2 \). Initial angular momentum \( L_i = I_i \omega_i = 0.001 \times 8 = 0.008 \, \text{kg·m}^2/\text{s} \). Final moment of inertia: disk + mass (\( I_{\text{mass}} = m r^2 = 0.1 \times 0.1^2 = 0.001 \, \text{kg·m}^2 \)), so \( I_f = 0.001 + 0.001 = 0.002 \, \text{kg·m}^2 \). Conservation: \( 0.008 = 0.002 \times \omega_f \), \( \omega_f = \frac{0.008}{0.002} = 4 \, \text{rad/s} \) (2 significant figures). This is a common NEET problem.

## Review & Summary
- **Rolling Motion**: Combines translation and rotation; \( v_{\text{CM}} = r \omega \) for no slipping; \( K = \frac{1}{2} m v_{\text{CM}}^2 + \frac{1}{2} I \omega^2 \).
- **Torque**: \( \vec{\tau} = \vec{r} \times \vec{F} \); causes rotational acceleration (\( \sum \vec{\tau} = I \vec{\alpha} \)).
- **Angular Momentum**: \( \vec{L} = I \vec{\omega} \) for rotation; includes translational components in rolling.
- **Conservation of Angular Momentum**: \( I_i \omega_i = I_f \omega_f \) when no external torque acts.

## Quick Revision Section
- **Key Equations**:
  - Rolling: \( v_{\text{CM}} = r \omega \), \( K = \frac{1}{2} m v_{\text{CM}}^2 + \frac{1}{2} I \omega^2 \)
  - Torque: \( \tau = r F \sin\theta \), \( \sum \tau = I \alpha \)
  - Angular momentum: \( L = I \omega \)
  - Conservation: \( I_i \omega_i = I_f \omega_f \)
- **SI Units**: Torque (N·m), angular momentum (kg·m²/s), moment of inertia (kg·m²), energy (J).
- **JEE/NEET Tips**: Verify no-slip condition, sum torques for net effect, use significant figures (April 14, 2025), check angular momentum direction, practice pulley and rolling problems.
- **Applications**: Wheels, gyroscopes, pulleys, planetary motion.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of rolling motion, torque, and angular momentum, with year and paper details for each problem.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/rolling-torque-angular-momentum/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make rolling, torque, and angular momentum concepts accessible for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing rolling motion and precession coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*