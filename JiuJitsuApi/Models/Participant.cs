using System.ComponentModel.DataAnnotations;

namespace JiuJitsuApi.Models
{
    public class Participant
    {
        public int Id { get; set; }

        [Required]
        public string Name { get; set; }

        [Range(4, 16)]
        public int Age { get; set; }

        [Range(20, 250)]
        public decimal Weight { get; set; }

        [Required]
        public string Division { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }
    }
}

