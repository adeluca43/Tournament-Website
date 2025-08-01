using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using JiuJitsuApi.Models;

namespace BJJApi.Data
{
    public class BJJDbContext : DbContext
    {
        public DbSet<Participant> Participants { get; set; }

        public BJJDbContext(DbContextOptions<BJJDbContext> options) : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<Participant>().ToTable("Participants");

            // Optional: add constraints or seeding here
            modelBuilder.Entity<Participant>().Property(p => p.Name).IsRequired();
            modelBuilder.Entity<Participant>().Property(p => p.Division).HasMaxLength(10);

            // Example of seeding admin role & user (optional)
            var hasher = new PasswordHasher<IdentityUser>();
            var adminRole = new IdentityRole
            {
                Id = "role-admin-0001",
                Name = "Admin",
                NormalizedName = "ADMIN"
            };

            var adminUser = new IdentityUser
            {
                Id = "admin-user-0001",
                UserName = "admin@bjj.com",
                NormalizedUserName = "ADMIN@BJJ.COM",
                Email = "admin@bjj.com",
                NormalizedEmail = "ADMIN@BJJ.COM",
                PasswordHash = hasher.HashPassword(null, "Password1")
            };

            modelBuilder.Entity<IdentityRole>().HasData(adminRole);
            modelBuilder.Entity<IdentityUser>().HasData(adminUser);

            modelBuilder.Entity<IdentityUserRole<string>>().HasData(
                new IdentityUserRole<string>
                {
                    UserId = adminUser.Id,
                    RoleId = adminRole.Id
                }
            );
        }
    }
}
