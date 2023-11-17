class VehicleTrustSystem:
    def __init__(self):
        # Initialize trust scores for all vehicles
        self.trust_scores : dict = {}

    def report_event(self, reporting_vehicle, is_true):
        # Check if the reporting vehicle is in the trust system
        if reporting_vehicle not in self.trust_scores:
            self.trust_scores[reporting_vehicle] = 50  # Initial trust score
            
        # Calculate the trust change based on the event truthfulness and current trust score
        trust_change = self.calculate_change(is_true, self.trust_scores[reporting_vehicle])

        # Update the trust score within the range of 0 to 100
        self.trust_scores[reporting_vehicle] = max(0, min(100, self.trust_scores[reporting_vehicle] + trust_change))

    def calculate_change(self, is_true, trust_score):
        # Adjust the reward and punishment based on the current trust score
        if is_true == 0: return 0
        base_change = 10 if is_true == 1 else -10

        # Apply a diminishing returns function (square root in this case)
        if trust_score == 100:  return base_change
        trust_change = base_change * (1 - trust_score / 100)**0.5
        
        return trust_change

    def get_trust_score(self, vehicle):
        # Get the current trust score for a given vehicle
        return self.trust_scores.get(vehicle, None)

