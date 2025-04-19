---
title: Physics Book - Oscillations for JEE & NEET
description: Learn oscillations for JEE and NEET, covering simple harmonic motion, energy, damped/forced oscillations, and resonance, with practice MCQs.
slug: book/physics/oscillations
keywords: physics oscillations, JEE physics SHM, NEET physics resonance, simple harmonic motion
og:image: https://vidyamarg.com/og-physics-oscillations.jpg
---

# Chapter 15: Oscillations

Oscillations involve repetitive motion about an equilibrium position, fundamental to systems like springs, pendulums, and waves. This chapter explores simple harmonic motion (SHM), energy in SHM, damped and forced oscillations, and resonance. These concepts are critical for JEE Main, JEE Advanced, and NEET, appearing in problems on period, amplitude, and resonance frequencies. With clear explanations, exam-focused examples, and robust problem-solving strategies, this chapter equips students to master oscillations in competitive exams, ensuring precision and conceptual clarity.

## 15.1 Simple Harmonic Motion (SHM)

**Simple Harmonic Motion** is periodic motion where the restoring force is proportional to displacement and opposite in direction: \( F = -k x \), leading to acceleration \( a = -\omega^2 x \). The displacement follows \( x = A \sin(\omega t + \phi) \), where \( A \) is amplitude, \( \omega \) is angular frequency, and \( \phi \) is phase. Period: \( T = \frac{2\pi}{\omega} \). JEE/NEET problems often involve springs (\( \omega = \sqrt{\frac{k}{m}} \)) or pendulums (\( \omega = \sqrt{\frac{g}{l}} \)). *Fundamentals of Physics* emphasizes SHM’s sinusoidal nature.

**Solved Example**: A JEE Main problem involves a 0.5 kg mass on a spring (constant 200 N/m). Calculate the period of oscillation.
- **Solution**: Period: \( T = 2\pi \sqrt{\frac{m}{k}} \). Given \( m = 0.5 \, \text{kg} \), \( k = 200 \, \text{N/m} \): \( T = 2 \pi \sqrt{\frac{0.5}{200}} = 2 \pi \sqrt{0.0025} = 2 \pi \times 0.05 \approx 6.2832 \times 0.05 \approx 0.31416 \, \text{s} \approx 0.31 \, \text{s} \) (2 significant figures, April 14, 2025). This is a standard JEE SHM problem.
  - **JEE Tip**: Use SI units; simplify square root carefully. Common error: Forgetting \( 2\pi \) or incorrect units.

**Solved Example**: A NEET problem involves a simple pendulum (length 1 m, \( g = 9.8 \, \text{m/s}^2 \)). Calculate the frequency.
- **Solution**: Frequency: \( f = \frac{1}{T} = \frac{1}{2\pi} \sqrt{\frac{g}{l}} \). Given \( l = 1 \, \text{m} \), \( g = 9.8 \, \text{m/s}^2 \): \( f = \frac{1}{2 \pi} \sqrt{\frac{9.8}{1}} = \frac{\sqrt{9.8}}{6.2832} \approx \frac{3.1305}{6.2832} \approx 0.498 \, \text{Hz} \approx 0.50 \, \text{Hz} \) (2 significant figures). This is a typical NEET pendulum problem.
  - **NEET Tip**: Frequency is inverse of period; use \( g = 9.8 \). Common error: Using mass or incorrect \( g \).

## 15.2 Energy in SHM

Energy in SHM alternates between kinetic (\( K = \frac{1}{2} m v^2 \)) and potential (\( U = \frac{1}{2} k x^2 \)), with total energy \( E = \frac{1}{2} k A^2 \). At maximum displacement (\( x = \pm A \)), \( U = E \); at equilibrium (\( x = 0 \)), \( K = E \). JEE/NEET problems involve energy conservation or maximum velocity (\( v_{\text{max}} = \omega A \)). *University Physics* highlights energy applications in mechanical systems, tested in JEE Advanced.

**Solved Example**: A JEE Advanced problem involves a 1 kg mass on a spring (constant 100 N/m, amplitude 0.1 m). Calculate the maximum kinetic energy.
- **Solution**: Total energy: \( E = \frac{1}{2} k A^2 \). Given \( k = 100 \, \text{N/m} \), \( A = 0.1 \, \text{m} \): \( E = \frac{1}{2} \times 100 \times (0.1)^2 = \frac{1}{2} \times 100 \times 0.01 = 0.5 \, \text{J} \). Maximum kinetic energy equals total energy at equilibrium: \( K_{\text{max}} = 0.5 \, \text{J} \) (2 significant figures).
  - **JEE Tip**: Maximum kinetic energy at \( x = 0 \); use amplitude squared. Common error: Using mass or incorrect \( A \).

**Solved Example**: A NEET problem involves a 0.2 kg mass in SHM (amplitude 0.05 m, frequency 2 Hz). Calculate the maximum velocity.
- **Solution**: Maximum velocity: \( v_{\text{max}} = \omega A \), where \( \omega = 2 \pi f \). Given \( f = 2 \, \text{Hz} \), \( A = 0.05 \, \text{m} \): \( \omega = 2 \pi \times 2 = 4 \pi \approx 12.566 \, \text{rad/s} \), \( v_{\text{max}} = 12.566 \times 0.05 \approx 0.6283 \, \text{m/s} \approx 0.63 \, \text{m/s} \) (2 significant figures). This is a typical NEET velocity problem.
  - **NEET Tip**: Use \( \omega = 2 \pi f \); mass not needed. Common error: Incorrect frequency or amplitude units.

## 15.3 Damped and Forced Oscillations

**Damped oscillations** lose amplitude due to resistive forces (e.g., friction), described by \( x = A e^{-bt/2m} \cos(\omega' t + \phi) \), where \( b \) is the damping constant. **Forced oscillations** occur under an external periodic force, with amplitude maximized at **resonance** when the driving frequency matches the natural frequency. JEE/NEET problems involve damping time constants or resonance conditions. *Fundamentals of Physics* connects damping to real-world systems like shock absorbers.

**Solved Example**: A JEE Main problem involves a 0.5 kg mass in damped SHM (damping constant 0.1 kg/s, spring constant 50 N/m). Calculate the time for amplitude to halve.
- **Solution**: Amplitude decays as \( A(t) = A_0 e^{-bt/2m} \). Halving means \( \frac{A(t)}{A_0} = 0.5 = e^{-bt/2m} \). Given \( b = 0.1 \, \text{kg/s} \), \( m = 0.5 \, \text{kg} \): \( \ln(0.5) = -\frac{0.1 t}{2 \times 0.5} \), \( -0.6931 = -0.1 t \), \( t = \frac{0.6931}{0.1} \approx 6.931 \, \text{s} \approx 6.9 \, \text{s} \) (2 significant figures).
  - **JEE Tip**: Use exponential decay; solve for \( t \). Common error: Ignoring mass or incorrect exponent.

**Solved Example**: A NEET problem involves a forced oscillator at resonance (natural frequency 5 Hz). What is the driving frequency for maximum amplitude?
- **Solution**: At resonance, the driving frequency equals the natural frequency. Given natural frequency \( f_0 = 5 \, \text{Hz} \): driving frequency \( f = 5 \, \text{Hz} \). This is a typical NEET resonance problem.
  - **NEET Tip**: Resonance occurs when \( f = f_0 \); no calculation needed. Common error: Assuming different frequencies or complex calculations.

## 15.4 Resonance

**Resonance** occurs when a system is driven at its natural frequency, maximizing amplitude. For a spring-mass system, natural frequency \( f_0 = \frac{1}{2\pi} \sqrt{\frac{k}{m}} \). Resonance is critical in engineering (e.g., bridges) and physics experiments. JEE/NEET problems involve calculating resonant frequencies or amplitude effects. *University Physics* emphasizes resonance in oscillatory systems, tested in JEE Advanced.

**Solved Example**: A JEE Advanced problem involves a 2 kg mass on a spring (constant 800 N/m) driven at resonance. Calculate the resonant frequency.
- **Solution**: Resonant frequency: \( f_0 = \frac{1}{2\pi} \sqrt{\frac{k}{m}} \). Given \( k = 800 \, \text{N/m} \), \( m = 2 \, \text{kg} \): \( f_0 = \frac{1}{2 \pi} \sqrt{\frac{800}{2}} = \frac{1}{6.2832} \sqrt{400} = \frac{20}{6.2832} \approx 3.183 \, \text{Hz} \approx 3.2 \, \text{Hz} \) (2 significant figures).
  - **JEE Tip**: Resonant frequency is natural frequency; simplify square root. Common error: Using incorrect \( k \) or \( m \).

**Solved Example**: A NEET problem involves a pendulum (length 0.25 m, \( g = 9.8 \, \text{m/s}^2 \)) at resonance. What is the driving period?
- **Solution**: Resonant period: \( T = 2 \pi \sqrt{\frac{l}{g}} \). Given \( l = 0.25 \, \text{m} \), \( g = 9.8 \, \text{m/s}^2 \): \( T = 2 \pi \sqrt{\frac{0.25}{9.8}} = 6.2832 \sqrt{0.02551} \approx 6.2832 \times 0.1597 \approx 1.0034 \, \text{s} \approx 1.0 \, \text{s} \) (2 significant figures).
  - **NEET Tip**: Resonance uses natural period; use pendulum formula. Common error: Incorrect length or \( g \).

## Review & Summary
- **SHM**: Motion with \( F = -k x \), displacement \( x = A \sin(\omega t + \phi) \), period \( T = 2 \pi \sqrt{\frac{m}{k}} \) (spring) or \( \sqrt{\frac{l}{g}} \) (pendulum).
- **Energy**: Total \( E = \frac{1}{2} k A^2 \), kinetic \( K = \frac{1}{2} m v^2 \), potential \( U = \frac{1}{2} k x^2 \).
- **Damped/Forced**: Damping reduces amplitude; forced oscillations peak at resonance.
- **Resonance**: Maximum amplitude when driving frequency equals natural frequency.

## Quick Revision Section
- **Key Equations**:
  - SHM: \( x = A \sin(\omega t + \phi) \), \( \omega = \sqrt{\frac{k}{m}} \) (spring), \( \sqrt{\frac{g}{l}} \) (pendulum)
  - Energy: \( E = \frac{1}{2} k A^2 \), \( v_{\text{max}} = \omega A \)
  - Damping: \( x = A e^{-bt/2m} \cos(\omega' t + \phi) \)
  - Resonance: \( f_0 = \frac{1}{2\pi} \sqrt{\frac{k}{m}} \)
- **SI Units**: Displacement (m), frequency (Hz), period (s), energy (J).
- **JEE/NEET Tips**: Use SI units, verify significant figures (April 14, 2025), simplify square roots, apply energy conservation, recognize resonance conditions.
- **Applications**: Springs, pendulums, shock absorbers, musical instruments, bridges.

## Practice Problems
Explore our extensive problem set with **100 problems** inspired by JEE Main, JEE Advanced, and NEET PYQs (2020–2024) to test your understanding of oscillations, with year and paper details.

[View Problems](./problems.md)

<!-- [View Solutions](/books/physics/oscillations/solutions) -->

## Watch on YouTube
Our Hinglish video lessons make oscillations accessible for JEE and NEET! Subscribe for updates.

[Watch Now](https://www.youtube.com/@VidyaMargbyRaviShankar-w9u) <!-- Update with specific video link when available -->

*Manim animation for visualizing SHM and resonance coming soon!*

*Note: Content regularly updated to align with current JEE/NEET syllabi.*